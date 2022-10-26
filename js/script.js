// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function calculates the area and perimeter of a square with user input
 */
function myButtonClicked() {
  // input
  const baseA = parseInt(document.getElementById("baseA-number").value)
  const baseB = parseInt(document.getElementById("baseB-number").value)
  const height = parseInt(document.getElementById("height-number").value)

  //process

  const area = [(baseA + baseB) / 2] * height

  // output
  document.getElementById("area").innerHTML =
    "Area is equal to: " + area + " cm²"
}
