/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useEffect } from "react";

import sharedStyles from "./adStyle.module.css";

// Official GPT sources.
const GPT_STANDARD_URL = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
const GPT_LIMITED_ADS_URL = "https://pagead2.googlesyndication.com/tag/js/gpt.js";

// Keep track of defined ad slots.
let adSlots = {};
let adSlotCount = 0;

if (typeof window !== "undefined") {
  // Ensure we can interact with the GPT command array.
  window.googletag = window.googletag || { cmd: [] };

  // Prepare GPT to display ads.
  googletag.cmd.push(() => {
    // Disable initial load, to precisely control when ads are requested.
    // googletag.pubads().disableInitialLoad();

    // // Enable SRA and services.
    // googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
}

export function InitializeGPT({ limitedAds }) {
  // Reset tracking variables.
  adSlots = {};
  adSlotCount = 0;

  return <script src={limitedAds ? GPT_LIMITED_ADS_URL : GPT_STANDARD_URL} />;
}

export function DefineAdSlot() {
  const adUnit = "/6355419/Travel/Europe/France/Paris";
  const size = [728, 90];
  const slotId = `slot-${adSlotCount++}`;

  useEffect(() => {
    // Register the slot with GPT when the component is loaded.
    googletag.cmd.push(() => {
      const slot = googletag.defineSlot(adUnit, size, slotId);
      if (slot) {
        slot.addService(googletag.pubads());
        googletag.display(slot);
        adSlots[slotId] = slot;
      }
    });

    // Clean up the slot when the component is unloaded.
    return () => {
      googletag.cmd.push(() => {
        if (adSlots[slotId]) {
          googletag.destroySlots([adSlots[slotId]]);
          delete adSlots[slotId];
        }
      });
    };
  }, []);

  // Create the ad slot container.
  return (
    <div
      className={`${sharedStyles.adSlot} ${sharedStyles.centered} h-96`}
      id={slotId}
    ></div>
  );
}

export function RequestAds() {
  useEffect(() => {
    googletag.cmd.push(() => {
      // Request ads for all defined ad slots.
      googletag.pubads().refresh();
    });
  }, []);
}

/**
 * Determine minimum width and height values for an ad slot container
 * based on the configured slot sizes.
 *
 * This function is only provided for example purposes. See
 * [Minimize layout shift](https://developers.google.com/publisher-tag/guides/minimize-layout-shift)
 * to learn more about strategies for sizing ad slot containers.
 */
function getMinimumSlotSize(size) {
  const maxValue = Number.MAX_VALUE;

  let minW = Number.MAX_VALUE;
  let minH = Number.MAX_VALUE;

  if (Array.isArray(size)) {
    // Convert googletag.SingleSize to googletag.MultiSize for convenience.
    const sizes = size.length <= 2 && !Array.isArray(size[0]) ? [size] : size;

    for (const size of sizes) {
      if (Array.isArray(size) && size[0] !== "fluid") {
        minW = Math.min(size[0], minW);
        minH = Math.min(size[1], minH);
      }
    }
  }

  return minW < maxValue && minH < maxValue
    ? // Static ad slot.
      { minWidth: `${minW}px`, minHeight: `${minH}px` }
    : // Fluid ad slot.
      { minWidth: "50%" };
}
