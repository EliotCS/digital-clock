# digital-clock
A basic real-time 12-hour digital clock built with HTML, CSS, and JavaScript.

# JavaScript Digital Clock

A clean, real-time web application that displays the current time in a 12-hour format with AM/PM indicators.

## About

I built this project to test and apply my growing JavaScript skills. I challenged myself to build the timing logic, handle the math for converting 24-hour time to 12-hour time, and format numbers cleanly using JavaScript rather than following a basic code-along.

## What I Learned

While building this project, I practiced:

* Running continuous code loops using `setInterval()` to update the clock every second
* Fetching live device time using the JavaScript `Date` object (`.getHours()`, `.getMinutes()`, `.getSeconds()`)
* Converting 24-hour time to 12-hour format using the remainder operator (`% 12`)
* Converting numeric data to strings using `.toString()` to allow for text manipulation
* Formatting single-digit numbers cleanly with leading zeros using `.padStart()`
* Encapsulating function scope and manipulating the DOM to update elements dynamically

## Features

* **Real-Time Display** — updates every second automatically without page refreshes
* **12-Hour Format** — cleanly converts standard 24-hour system time into standard 12-hour display
* **AM/PM Indicator** — dynamically toggles between AM and PM based on the current hour
* **Clean Number Formatting** — ensures double digits across hours, minutes, and seconds (e.g., `05:09:02`)
* **Sleek Layout** — styled using CSS for clear readability and a modern aesthetic

## Technologies Used

* HTML
* CSS
* JavaScript

## Purpose

This project is part of my journey transitioning into JavaScript and web development. Building a digital clock allowed me to test my problem-solving ability, debug real timing and scope issues, and master fundamental JavaScript concepts like string methods and asynchronous intervals.

I plan to keep building and recreating projects to sharpen my front-end development skills.

## Preview
<img width="1908" height="944" alt="Screenshot 2026-08-26 175346" src="https://github.com/user-attachments/assets/98073445-6a14-4d70-b4f8-1834ccedb639" />


## Live Demo

[View the Digital Clock App](https://eliotcs.github.io/Digital-Clock/)
