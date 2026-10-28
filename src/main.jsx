import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    id:"pro-200", name:"Pro-200", category:"Treadmills", price:449, rating:4.8, reviews:86, maxWeight:85, weightTier:"premium",
    meta:"High Grade Motor | Foldable | Home & Gym", image:"/assets/pro-200.png",
    description:"Pro-200 treadmill with a high-grade 2.0HP continuous motor, 4.0HP peak power and a comfortable diamond-pattern running belt.",
    details:[
      "Motor: High Grade 2.0HP Continuous & 4.0HP PEAK, with RoHS Certified.",
      "Max User Weight: 85 Kg.",
      "Incline: Manual with 3 levels.",
      "Speed: 0.8-14.8 Km/hr.",
      "Running Surface: 420mm x 1150mm.",
      "Display: Big blue LCD, Time, Speed, Distance, Calories and Pulse.",
      "Music: MP3 with USB and High-Quality Inbuilt Speakers.",
      "Running Belt: Comfortable diamond pattern with top quality.",
      "Foldable With Easy Moving Wheels.",
      "1 Year Warranty + 1 Free Full-Service.",
      "Free Toolkit And Silicon Oil.",
      "4 High-Quality Speakers.",
      "360-Degree Stereo Hifi Sound.",
      "We Supply A Voltage Stabilizer Along With A Treadmill."
    ]
  },
  {
    id:"t-20cz-pro-600", name:"Model: T-20CZ / Pro 600", category:"Treadmills", price:749, rating:4.8, reviews:92, maxWeight:140, weightTier:"gold",
    meta:"3.5HP Motor | Auto Incline | Foldable", image:"/assets/t-20cz-pro-600.png",
    description:"T-20CZ / Pro 600 treadmill with a 3.5 HP continuous duty motor, auto incline, shock-absorbing springs and a large LCD control panel.",
    details:[
      "Motor: 3.5 Hp Continuous Duty Motor, 7.0 Hp Peak Dc.",
      "Max. User Wt: 140 Kg.",
      "Power Incline: 1~15%.",
      "Speed: 1.0-20.0 Km /hr.",
      "Running Area: 19.2 X 56.0 Inch.",
      "Console: 5 Inches Lcd Screen With Blue Back Lit.",
      "Display: Speed, Distance, Time, Calories and Pulse.",
      "Inclination: 0-15% Auto Incline.",
      "08 Shock Absorbing Springs Cushions.",
      "Foldable / Movable.",
      "Double Layer Running Board.",
      "Exquisite Smooth Glossy Control Panel With 1 Large LCD Display Speed, Distance, Time, Calorie, Pulse, Incline, Clock And Body Fat With Inbuilt Mp3 Speakers.",
      "Usb, Sd Card & Aux Input."
    ]
  },
  {
    id:"pro-600a", name:"Model: Pro 600A", category:"Treadmills", price:799, rating:4.9, reviews:88, maxWeight:140, weightTier:"gold",
    meta:"4HP Peak AC Motor | 2 Hours Continuous Usage | Auto Incline", image:"/assets/pro-600a.png",
    description:"Pro 600A treadmill with a 4 HP peak AC heavy-duty motor, up to 2 hours continuous usage, auto incline and multiple console features.",
    details:[
      "Don't limit continuous usage to 30 mins (2 hours continuous usage).",
      "Motor: 4 HP Peak AC Heavy Duty Motor (does not have a usage limit of 30-40 minutes).",
      "Max. User Wt: 140 Kg.",
      "Power Incline: 1~15%.",
      "Speed: 1.0-20.0 Km /hr.",
      "Running Area: 19.2 X 56.0 Inch.",
      "Console: 5 Inches Lcd Screen With Blue Back Lit.",
      "Display: Speed, Distance, Time, Calories and Pulse.",
      "Inclination: 0-15% Auto Incline.",
      "08 Shock Absorbing Springs Cushions.",
      "Foldable / Movable.",
      "Double Layer Running Board.",
      "Exquisite Smooth Glossy Control Panel With 1 Large LCD Display Speed, Distance, Time, Calorie, Pulse, Incline, Clock And Body Fat With Inbuilt Mp3 Speakers.",
      "Usb, Sd Card & Aux Input."
    ]
  },
  {
    id:"t-15cz-pro-400", name:"Model: T-15CZ / Pro 400", category:"Treadmills", price:599, rating:4.8, reviews:0, maxWeight:120, weightTier:"premium",
    meta:"3.00HP Continuous Motor | Auto Incline 0-15% | Foldable", image:"/assets/t-15cz-pro-400.png",
    description:"T-15CZ / Pro 400 treadmill with a 3.00 HP continuous motor, 6.0 HP peak power, auto incline, shock absorbing springs and multimedia features.",
    details:[
      "Motor: 3.00 HP Continuous & 6.0HP PEAK.",
      "Max. User Wt: 120 Kg.",
      "Incline: Auto Incline 0-15%.",
      "Speed: 0.8-16 Km/Hr.",
      "Running Area: 18.5 x 51 inches.",
      "Display: Time, Speed, Distance, Calories, Pulse and Incline.",
      "8 Point Support On Shock Absorbing Springs.",
      "2 Main Shock Absorbing Springs.",
      "Foldable And Moveable.",
      "USB And Audio Input Aux Lead.",
      "Good Shock Reduction Function.",
      "4 High Quality Speakers.",
      "360 Degree Stereo Hifi Sound.",
      "We Supply Voltage Stabilizer Along With Treadmill."
    ]
  },
  {
    id:"pro-500", name:"Model: Pro500", category:"Treadmills", price:649, rating:4.8, reviews:0, maxWeight:120, weightTier:"premium",
    meta:"4HP Motor | Auto Incline 0-15% | USB, MP3 & Bluetooth", image:"/assets/pro-500.png",
    description:"Pro500 treadmill with a 4 HP high-insulation motor, auto power incline, LCD display console and USB, MP3 and Bluetooth features.",
    details:[
      "Motor: 4 HP High insulation.",
      "Max. User Wt: 120 Kg.",
      "Power Incline: 0-15% Auto.",
      "Speed: 0.8-16 KM/Hr.",
      "Running Area: 450 x 1260mm.",
      "12 Programs, 3 Modes, USB, MP3, Inbuilt Bluetooth app.",
      "Features: DC 2HP Continuous Power, 4HP Peak Power.",
      "5 Inches LCD Display Console With Time, Speed, Distance Calculation, Pulse, Fat Measure.",
      "Included Components: 1 Treadmill, Toolkit, User Manual And Warranty Card."
    ]
  },
  {
    id:"t-12", name:"Model: T-12", category:"Treadmills", price:399, price3Month:1197, price6Month:2394, rating:4.7, reviews:0, maxWeight:75, treadmillTier:"premium",
    meta:"2HP Continuous Motor | Manual Incline | 75 Kg Max",
    image:"/assets/t-12.png",
    description:"T-12 treadmill with a 2.0 HP continuous motor, manual incline, compact running deck and LCD workout display.",
    details:[
      "Motor: 2.0 HP Continuous, 4.0 HP Peak.",
      "Max User Weight: 75 Kg.",
      "Incline: Manual.",
      "Speed: 0.8-12 Km/hr.",
      "Running Surface: 42 x 120 cm.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "15 Programs for varied workouts.",
      "Compact design suitable for home use."
    ]
  },
  {
    id:"t-13", name:"Model: T-13", category:"Treadmills", price:449, price3Month:1347, price6Month:2694, rating:4.7, reviews:0, maxWeight:100, treadmillTier:"premium",
    meta:"2.5HP Continuous Motor | Manual Incline | 100 Kg Max",
    image:"/assets/t-13.png",
    description:"T-13 treadmill with 2.5 HP continuous power, manual incline, 16 km/h speed and an LCD workout display.",
    details:[
      "Motor: 2.5 HP Continuous, 5.0 HP Peak.",
      "Max User Weight: 100 Kg.",
      "Incline: Manual.",
      "Speed: 1-16 Km/hr.",
      "Running Surface: 46 x 130 cm.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "15 Programs.",
      "Home-friendly treadmill design."
    ]
  },
  {
    id:"t-370", name:"Model: T-370", category:"Treadmills", price:499, price3Month:1497, price6Month:2994, rating:4.8, reviews:0, maxWeight:100, treadmillTier:"premium",
    meta:"3.5HP Continuous Motor | Motorized Incline | 100 Kg Max",
    image:"/assets/t-370.png",
    description:"T-370 treadmill with 3.5 HP continuous motor, motorized 0-15% incline, 16 km/h speed and a feature-rich console.",
    details:[
      "Motor: 3.5 HP Continuous, 6.0 HP Peak.",
      "Max User Weight: 100 Kg.",
      "Incline: Motorized 0-15%.",
      "Speed: 1-16 Km/hr.",
      "Running Surface: 48 x 140 cm.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "12 Speed Programs and Body Fat / Fitness functions.",
      "LCD display with workout information."
    ]
  },
  {
    id:"t-1200cb", name:"Model: T-1200CB", category:"Treadmills", price:449, price3Month:1347, price6Month:2694, rating:4.7, reviews:0, maxWeight:100, treadmillTier:"premium",
    meta:"2.5HP Continuous Motor | Manual Incline | 100 Kg Max",
    image:"/assets/t-1200cb.png",
    description:"T-1200CB treadmill with continuous-duty motor, manual incline, compact running deck and LCD display with essential workout metrics.",
    details:[
      "Motor: 2.5 HP Continuous, 4.5 HP Peak.",
      "Max User Weight: 100 Kg.",
      "Incline: Manual.",
      "Speed: Up to 14 Km/hr.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "Foldable and practical for home workouts.",
      "Workout information is shown on the console."
    ]
  },
  {
    id:"t-12000cb", name:"Model: T-12000CB", category:"Treadmills", price:399, price3Month:1197, price6Month:2394, rating:4.6, reviews:0, maxWeight:100, treadmillTier:"premium",
    meta:"1.5HP Continuous Motor | Foldable | 100 Kg Max",
    image:"/assets/t-12000cb.png",
    description:"T-12000CB compact treadmill with a 1.5 HP continuous motor, foldable construction and essential workout display features.",
    details:[
      "Motor: 1.5 HP Continuous, 3.0 HP Peak.",
      "Max User Weight: 100 Kg.",
      "Speed: Up to 10 Km/hr.",
      "Foldable design.",
      "LCD workout display.",
      "Time, Speed, Distance, Calories and Pulse information.",
      "Compact option for home workouts."
    ]
  },
  {
    id:"t-15", name:"Model: T-15", category:"Treadmills", price:449, price3Month:1347, price6Month:2694, rating:4.7, reviews:0, maxWeight:100, treadmillTier:"premium",
    meta:"2.5HP Continuous Motor | Manual Incline | 100 Kg Max",
    image:"/assets/t-15.png",
    description:"T-15 treadmill with 2.5 HP continuous power, manual incline, 16 km/h speed and a practical LCD display.",
    details:[
      "Motor: 2.5 HP Continuous, 4.5 HP Peak.",
      "Max User Weight: 100 Kg.",
      "Incline: Manual.",
      "Speed: Up to 16 Km/hr.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "Multiple workout programs.",
      "Practical treadmill for regular home training."
    ]
  },
  {
    id:"t-375", name:"Model: T-375", category:"Treadmills", price:499, price3Month:1497, price6Month:2994, rating:4.7, reviews:0, maxWeight:100, treadmillTier:"premium",
    meta:"2.5HP Continuous Motor | Manual Incline | 100 Kg Max",
    image:"/assets/t-375.png",
    description:"T-375 treadmill with 2.5 HP continuous motor, manual incline, LCD display and multiple workout programs.",
    details:[
      "Motor: 2.5 HP Continuous, 5.0 HP Peak.",
      "Max User Weight: 100 Kg.",
      "Incline: Manual.",
      "Speed: Up to 16 Km/hr.",
      "Running Surface: approximately 40 x 120 cm.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "12 Speed Programs and Body Fat functions.",
      "Quick access speed keys."
    ]
  },
  {
    id:"t-17", name:"Model: T-17", category:"Treadmills", price:549, price3Month:1647, price6Month:3294, rating:4.8, reviews:0, maxWeight:120, treadmillTier:"gold",
    meta:"2.5HP Continuous Motor | Manual Incline | 120 Kg Max",
    image:"/assets/t-17.png",
    description:"T-17 treadmill with 2.5 HP continuous motor, manual incline, 16 km/h speed and a full LCD workout display.",
    details:[
      "Motor: 2.5 HP Continuous, 5.0 HP Peak.",
      "Max User Weight: 120 Kg.",
      "Incline: Manual.",
      "Speed: Up to 16 Km/hr.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "LCD display with workout information.",
      "Multiple workout programs."
    ]
  },
  {
    id:"t-378", name:"Model: T-378", category:"Treadmills", price:599, price3Month:1797, price6Month:3594, rating:4.8, reviews:0, maxWeight:120, treadmillTier:"gold",
    meta:"2.5HP High-Insulation Motor | Manual Incline | 120 Kg Max",
    image:"/assets/t-378.png",
    description:"T-378 treadmill with a high-insulation motor, manual incline, LCD console, multiple programs and enhanced shock support.",
    details:[
      "Motor: 2.5 HP High Insulation Motor.",
      "Max User Weight: 120 Kg.",
      "Incline: Manual.",
      "Speed: Up to 16 Km/hr.",
      "Running Surface: 50 x 130 cm.",
      "Display: Time, Speed, Distance, Calories, Pulse and Incline.",
      "12 speed programs and body fat functions.",
      "Enhanced shock-absorbing running support."
    ]
  },
  {
    id:"t-14", name:"Model: T-14", category:"Treadmills", price:549, price3Month:1647, price6Month:3294, rating:4.8, reviews:0, maxWeight:130, treadmillTier:"gold",
    meta:"3HP Continuous Motor | Manual Incline | 130 Kg Max",
    image:"/assets/t-14.png",
    description:"T-14 treadmill with 3 HP continuous power, manual incline, LCD display and multiple preset workout programs.",
    details:[
      "Motor: 3.0 HP Continuous.",
      "Max User Weight: 130 Kg.",
      "Incline: Manual.",
      "Speed: Up to 16 Km/hr.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "25 preset programs.",
      "Practical treadmill for regular home and gym workouts."
    ]
  },
  {
    id:"t-590", name:"Model: T-590", category:"Treadmills", price:599, price3Month:1797, price6Month:3594, rating:4.8, reviews:0, maxWeight:130, treadmillTier:"gold",
    meta:"3HP Continuous Motor | Auto Incline | 130 Kg Max",
    image:"/assets/t-590.png",
    description:"T-590 treadmill with auto incline, 15 km/h speed, large LCD console, multiple programs and shock-absorbing support.",
    details:[
      "Motor: 3.0 HP Continuous.",
      "Max User Weight: 130 Kg.",
      "Incline: Auto Incline 0-15%.",
      "Speed: 1-15 Km/hr.",
      "Large LCD display with time, speed, distance, calories and pulse.",
      "15 preset programs, 9 user and manual modes.",
      "Large shock-absorbing support system.",
      "Body fat function and quick speed controls."
    ]
  },
  {
    id:"t-640", name:"Model: T-640", category:"Treadmills", price:699, price3Month:2097, price6Month:4194, rating:4.9, reviews:0, maxWeight:140, treadmillTier:"elite",
    meta:"4HP Continuous Motor | Power Incline | 140 Kg Max",
    image:"/assets/t-640.png",
    description:"T-640 heavy-duty treadmill with a powerful motor, power incline, large running deck and advanced workout programs.",
    details:[
      "Powerful treadmill motor with heavy-duty construction.",
      "Max User Weight: 140 Kg.",
      "Power Incline: 1-17%.",
      "Speed: Up to 20 Km/hr.",
      "Large running surface.",
      "Display: Time, Speed, Distance, Calories and Pulse.",
      "Multiple preset programs and manual mode.",
      "Quick access speed controls."
    ]
  },
  {
    id:"elite-t-855ac", name:"Model: Elite T-855AC", category:"Treadmills", price:799, price3Month:2397, price6Month:4794, rating:4.9, reviews:0, maxWeight:140, treadmillTier:"elite",
    meta:"4.5HP High-Grade AC Motor | Long-Use Design | 140 Kg Max",
    image:"/assets/elite-t-855ac.png",
    description:"Elite T-855AC heavy-duty treadmill designed for extended continuous usage, with a high-grade AC motor and advanced training programs.",
    details:[
      "High-grade AC motor designed for extended continuous usage.",
      "Max User Weight: 140 Kg.",
      "Speed: Up to 20 Km/hr.",
      "Large running deck.",
      "12 preset programs and user/manual modes.",
      "Body Fat function.",
      "Multiple display and workout controls.",
      "Heavy-duty design for demanding training sessions."
    ]
  },
  {
    id:"ct-5600", name:"Model: CT-5600", category:"Cross Trainers", price:399, rating:4.8, reviews:0,
    meta:"Deluxe Magnetic Elliptical Bike | 8 Level Manual Tension", image:"/assets/ct-5600.png",
    description:"Deluxe magnetic elliptical bike with 8 level manual tension control, step-through frame, practical design and an integrated computer display.",
    details:[
      "Deluxe Magnetic Elliptical Bike.",
      "8 Level Manual Tension Control.",
      "Step Through Frame For Easy Access.",
      "Stylish And Practical Folding Design.",
      "Computer Display Time, Distance, Speed, Calorie And Pulse Along With 4 Integrated Riding Games.",
      "Handle Bar Design Offer Superb Ergonomics And Versatile Options.",
      "Ultimate Cross Trainer Frame For The Most Demanding User.",
      "Top Quality Components Ensure Perfect Training Ergonomic.",
      "Long Stride And 10 Kg Of Rotating Mass Ensures Smooth And Dynamic Movement."
    ]
  },
  {
    id:"ct-01", name:"Model: CT-01", category:"Cross Trainers", price:399, rating:4.8, reviews:0,
    meta:"Deluxe Magnetic Elliptical Bike | 8 Level Manual Tension", image:"/assets/ct-01.png",
    description:"Deluxe magnetic elliptical bike with 8 level manual tension control, step-through frame, practical design and an integrated computer display.",
    details:[
      "Deluxe Magnetic Elliptical Bike.",
      "8 Level Manual Tension Control.",
      "Step Through Frame For Easy Access.",
      "Stylish And Practical Folding Design.",
      "Computer Display Time, Distance, Speed, Calorie And Pulse Along With 4 Integrated Riding Games.",
      "Handle Bar Design Offer Superb Ergonomics And Versatile Options.",
      "Ultimate Cross Trainer Frame For The Most Demanding User.",
      "Top Quality Components Ensure Perfect Training Ergonomic.",
      "Long Stride And 10 Kg Of Rotating Mass Ensures Smooth And Dynamic Movement."
    ]
  },
  {
    id:"ct-504", name:"Model: CT-504", category:"Cross Trainers", price:399, rating:4.8, reviews:0,
    meta:"Deluxe Magnetic Elliptical Bike | 8 Level Manual Tension", image:"/assets/ct-504.png",
    description:"Deluxe magnetic elliptical bike with 8 level manual tension control, step-through frame, practical design and an integrated computer display.",
    details:[
      "Deluxe Magnetic Elliptical Bike.",
      "8 Level Manual Tension Control.",
      "Step Through Frame For Easy Access.",
      "Stylish And Practical Fitting Design.",
      "Computer Display Time, Distance, Speed, Calorie And Pulse Along With 4 Integrated Riding Games.",
      "Handle Bar Design Offer Superb Ergonomics And Versatile Options.",
      "Ultimate Cross Trainer Frame For The Most Demanding User.",
      "Top Quality Components Ensure Perfect Training Ergonomic.",
      "Long Stride And 10 Kg Of Rotating Mass Ensures Smooth And Dynamic Movement."
    ]
  },

  {
    id:"ct-509", name:"Model: CT-509", category:"Cross Trainers", price:449, rating:4.8, reviews:0,
    meta:"Magnetic Elliptical Bike | Compact Design | 10 Kg Rotating Mass", image:"/assets/ct-509.png",
    description:"Magnetic elliptical bike with a compact design, smooth step-through movement and a 10 Kg rotating mass for steady, dynamic workouts.",
    details:[
      "Magnetic Elliptical Bike.",
      "Computer Display: Time, Distance, Speed, Time, Calorie And Pulse.",
      "Compact Size, Fits Everywhere.",
      "Sparkle Limited Touch Design.",
      "Light Weight Yet Sturdy Construction.",
      "Rich Driven & Light Manual Tension Control.",
      "Step Through Frame For Easy Access.",
      "Stylish And Practical Folding Design.",
      "Top Quality Components And Whole Adjustable Frame For Perfect Training Experience.",
      "Long Stride And 10 Kg Of Rotating Mass Ensures Smooth And Dynamic Movement."
    ]
  },
  {
    id:"ct-bk78h", name:"Model: CT-BK78H", category:"Cross Trainers", price:449, rating:4.8, reviews:0,
    meta:"Deluxe Magnetic Elliptical Bike | 8 Level Manual Tension | 120 Kg Max", image:"/assets/ct-bk78h.png",
    description:"Deluxe magnetic elliptical bike with adjustable manual tension, computer display, smooth pedal action and a sturdy 120 Kg user capacity.",
    details:[
      "Deluxe Magnetic Elliptical Bike.",
      "Resistance: 8 Level Manual Tension Control.",
      "Computer Display: Time, Distance, Speed, Calorie And Pulse.",
      "Flywheel: 7 Kg.",
      "Crank Type: 3 Pieces.",
      "Slippage Free Pedals.",
      "Strong Sturdy Frame.",
      "User Weight Limit: 120 Kg."
    ]
  },
  {
    id:"ct-ce2000", name:"Model: CT-CE2000", category:"Cross Trainers", price:499, rating:4.8, reviews:0,
    meta:"Front Drive Elliptical | 2 Level Manual Resistance | 120 Kg Max", image:"/assets/ct-ce2000.png",
    description:"Front-drive elliptical trainer with manual resistance, magnetic flywheel, three-piece crank and digital controlled resistance for smooth training.",
    details:[
      "Front Drive.",
      "Resistance: 2 Level Manual.",
      "Flywheel: 8.2 Kg Magnetic.",
      "Crank Type: 3 Pieces.",
      "With Hand Pulse.",
      "Adjustable Pedal / Position.",
      "Digital Controlled Resistance System.",
      "User Weight Limit: 120 Kg."
    ]
  },
  {
    id:"ct-1002", name:"Model: CT-1002", category:"Cross Trainers", price:499, rating:4.8, reviews:0,
    meta:"EMS System | 2 Level Manual Resistance | 120 Kg Max", image:"/assets/ct-1002.png",
    description:"EMS-system elliptical trainer with manual resistance, magnetic flywheel, hand pulse monitoring and digital controlled resistance.",
    details:[
      "EMS System.",
      "Resistance: 2 Level Manual.",
      "Flywheel: 8.2 Kg Magnetic.",
      "Crank Type: 3 Pieces.",
      "With Hand Pulse.",
      "Adjustable Pedal / Position.",
      "Digital Controlled Resistance System.",
      "User Weight Limit: 120 Kg."
    ]
  },
  {
    id:"ub-312", name:"Model: UB-312", category:"Exercise Bikes", price:249, rating:4.8, reviews:0,
    meta:"Deluxe Magnetic Upright Bike | 8 Level Manual Tension", image:"/assets/ub-312.jpg",
    description:"Deluxe magnetic upright bike with 8 level manual tension control, touch screen display and 12 training programs for smooth, effective workouts.",
    details:[
      "Deluxe Magnetic Upright Bike.",
      "8 Level Manual Tension Control.",
      "Touch Screen Display Time, Distance, Speed, Calorie, Pulse, And Temperature.",
      "Easily Legible Oversized Digits In Display.",
      "12 Programs With Recovery Including Manual, Body Fat, Hrc, Rpm And User Setting.",
      "Ergonomics Dimensions Enable Completely Natural And Effective Training.",
      "Completely Adjustable Seat, Comfort Pedals And Console.",
      "Long Stride And 5.5 Kg Of Rotating Mass Ensures Smooth And Dynamic Movement."
    ]
  },
  {
    id:"ub-5230", name:"Model: UB-5230", category:"Exercise Bikes", price:269, rating:4.8, reviews:0,
    meta:"Deluxe Magnetic Upright Bike | 8 Level Manual Tension", image:"/assets/ub-5230.jpg",
    description:"Deluxe magnetic upright bike with an easy-access step-through frame, integrated racing games and smooth, efficient pedaling.",
    details:[
      "Deluxe Magnetic Upright Bike.",
      "8 Level Manual Tension Control.",
      "Step Through Frame For Easy Access.",
      "Computer Display Time, Distance, Speed, Calorie, Pulse And Rpm, Along With 4 Integrated Racing Games.",
      "Shortened Pedal Distance For Bike-Like, Efficient Pedaling.",
      "Dynamic Power, Smooth Pedal Movement, Strengthened Cranks.",
      "Completely Adjustable Seat, Comfort Pedals And Console.",
      "Long Stride And 6.0 Kg Of Rotating Mass Ensures Smooth And Dynamic Movement."
    ]
  },
  {
    id:"spin-bike-c22", name:"Model: Spin-Bike (C22)", category:"Exercise Bikes", price:299, rating:4.9, reviews:0,
    meta:"Ergonomic Spin Bike | 16 Kg Rotating Mass | 130 Kg Max User Weight", image:"/assets/spin-bike-c22.jpg",
    maxWeight:130,
    description:"Ergonomic spin bike with a cushioned PU foam seat, 16 Kg wheel rotating mass, meter display and manual resistance control.",
    details:[
      "Ergonomic design and dimensions.",
      "Cushioned PU foam seat.",
      "16Kg. wheel rotating masses ensure smooth and dynamic movement.",
      "Meter Display: time, distance, speed, calorie and pulse.",
      "Easily legible oversized digits in display.",
      "Manual testing control.",
      "Maximum user weight: 130kg."
    ]
  },
  { id:"bike", name:"Exercise Bike", category:"Exercise Bikes", price:199, rating:4.6, reviews:76, meta:"Magnetic | Silent", image:"https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=900&q=85", description:"Low-noise magnetic resistance bike designed for convenient home workouts." },
  { id:"bike-pro", name:"Exercise Bike Pro", category:"Exercise Bikes", price:229, rating:4.7, reviews:81, meta:"Adjustable | Silent", image:"https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=900&q=85", description:"Comfortable adjustable exercise bike for daily cardio and endurance training." }
];

const PRODUCT_STORAGE_KEY = "fitrent_products_v6";
const DELETED_PRODUCT_STORAGE_KEY = "fitrent_deleted_products_v1";
const ADMIN_STORAGE_KEY = "fitrent_admin";
const OFFER_STORAGE_KEY = "fitrent_offer";
// Backend sync — Render par live API (ek device ka change sab devices par dikhane ke liye)
const API_URL = "https://inhouse-gym-backend.onrender.com";
const ADMIN_KEY = "ig-admin-9xK2mQ7";
const ADMIN_EMAIL = "inhousegym.admin@gmail.com";
const ADMIN_PASSWORD = "InHouseGym#2026$Admin";
// Brevo ke liye - sirf ye 3 lines badalni hain, baaki kuch mat chhedo
const OTP_SERVICE_ID = "service_8z3cvun";
const OTP_PUBLIC_KEY = "q-TRgIm_vP8q4ZPP3";
const OTP_TEMPLATE_ID = "template_pw7x2yj";
const ORDER_TEMPLATE_ID = "template_8gtpn5e";

const money = n => `₹${n.toLocaleString("en-IN")}`;
function sendCancelEmail(rental) {
  const orderNo = rental.order || "N/A";
  const cancellationParams = {
    // Keep the same variable names used by the working admin template.
    name: "InHouseGym",
    customer_name: rental.customer_name || "Customer",
    phone: rental.phone || "Not Available",
    product: rental.product || "Equipment",
    duration: `CANCELLED - Order #${orderNo}`,
    amount: "Rental Cancelled",
    address: `Order #${orderNo} - Customer cancelled the rental`,

    // Extra variables for the dedicated cancellation template.
    order: orderNo,
    order_id: orderNo,
    status: "CANCELLED",
    event_type: "Rental Cancellation",
    email_title: "Order Cancellation",
    email_message: "The following rental order has been cancelled by the customer.",
    action_required: ""
  };

  emailjs.send(
    OTP_SERVICE_ID,
    ORDER_TEMPLATE_ID,
    cancellationParams,
    OTP_PUBLIC_KEY
  )
  .then(() => {
    console.log("Cancellation email sent");
  })
  .catch((err) => {
    // Keep the existing working admin template as a safety fallback.
    console.error("Cancellation template failed:", err);
    return emailjs.send(
      OTP_SERVICE_ID,
      ORDER_TEMPLATE_ID,
      {
        name: "InHouseGym",
        customer_name: `[CANCELLED] ${rental.customer_name || "Customer"}`,
        phone: rental.phone || "Not Available",
        product: rental.product || "Equipment",
        duration: `CANCELLED - Order #${orderNo}`,
        amount: "Rental Cancelled",
        address: `Order #${orderNo} - Customer cancelled the rental`,
        email_title: "Order Cancellation",
        email_message: "The following rental order has been cancelled by the customer.",
        action_required: ""
      },
      OTP_PUBLIC_KEY
    );
  })
  .then(() => {
    console.log("Cancellation email delivered to admin");
  })
  .catch((fallbackErr) => {
    console.error("Cancellation email failed:", fallbackErr);
  });
}


function sendAdminEmail(order) {
  emailjs.send(
    OTP_SERVICE_ID,
    ORDER_TEMPLATE_ID,
    {
      name: "InHouseGym",
      customer_name: order.customer_name,
      phone: order.phone,
      product: order.product,
      duration: order.duration,
      amount: order.amount,
      address: order.address
    },
    OTP_PUBLIC_KEY

  )
  .then(() => console.log("Admin email sent"))
  .catch(err => console.error("Email failed", err));
}

function getStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
// ---------- Backend sync for users & rentals (admin cross-device fix) ----------
// LocalStorage sirf fallback hai. Asli data backend (Render + MongoDB) me save hota hai,
// isliye admin ko kisi bhi device par users aur rentals dikhte hain.
function stripPassword(u) {
  if (!u) return u;
  const { password, ...rest } = u;
  return rest;
}
async function callApi(method, url, body, useAdmin) {
  try {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", ...(useAdmin ? { "x-admin-key": ADMIN_KEY } : {}) },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {})
    });
    let data = null;
    try { data = await res.json(); } catch {}
    return { ok: res.ok, status: res.status, data };
  } catch { return null; }
}
async function getBackendJSON(url, useAdmin) {
  try {
    const res = await fetch(url, { headers: useAdmin ? { "x-admin-key": ADMIN_KEY } : {} });
    if (!res.ok) return null;
    return await res.json().catch(() => null);
  } catch { return null; }
}
async function syncRentalsToBackend(newRentals) {
  if (!newRentals || !newRentals.length) return;
  await callApi("POST", `${API_URL}/api/rentals`, newRentals, false);
}
function generatePasswordOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
async function sendPasswordResetOTP(email, name) {
  const otp = generatePasswordOTP();

  const resetData = {
    email: email.toLowerCase(),
    otp: otp,
    expiresAt: Date.now() + 10 * 60 * 1000
  };

  localStorage.setItem(
    "fitrent_password_reset",
    JSON.stringify(resetData)
  );

  await emailjs.send(
    OTP_SERVICE_ID,
    OTP_TEMPLATE_ID,
    {
      email: email,
      to_name: name || "InHouseGym User",
      otp: otp,
      from_name: "InHouseGym",
      reply_to: "inhousegym.admin@gmail.com",
      subject: "Your InHouseGym verification code"
    },
    OTP_PUBLIC_KEY
  );

  return true;
}

function Icon({name, size=20}) {
  const paths = {
    search:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    cart:<><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></>,
    user:<><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6"/></>,
    heart:<path d="M20.8 8.7c0 5.2-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.7A5 5 0 0 1 12 6.1a5 5 0 0 1 8.8 2.6Z"/>,
    trash:<><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/><path d="M10 11v5M14 11v5"/></>,
    check:<path d="m5 12 4 4L19 6"/>,
    arrow:<><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    back:<><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></>,
    menu:<><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close:<><path d="M6 6l12 12M18 6 6 18"/></>,
    card:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></>,
    shield:<><path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z"/><path d="m8 12 2.5 2.5L16 9"/></>,
    box:<><path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/></>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    home:<><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
    plus:<><path d="M12 5v14M5 12h14"/></>,
    minus:<path d="M5 12h14"/>,
    chevron:<path d="m7 10 5 5 5-5"/>,
    logout:<><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M21 19V5a2 2 0 0 0-2-2h-6"/></>,
    phone:<><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></>,
    pin:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    globe:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Logo() {
  return <div className="logo"><img src="/assets/inhousegym-logo.png" alt="InHouseGym"/></div>;
}

function Header({page, setPage, setShopCategory, cartCount, user, setShowAuth, setShowCart, onLogout, onNavigate}) {
  const [mobile,setMobile]=useState(false);
  const [accountOpen,setAccountOpen]=useState(false);
  const accountRef = useRef(null);

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      accountOpen &&
      accountRef.current &&
      !accountRef.current.contains(event.target)
    ) {
      setAccountOpen(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, [accountOpen]);
  return <header className="header">
    <div className="header-inner">
      <button className="mobile-menu" onClick={()=>setMobile(!mobile)}><Icon name={mobile?"close":"menu"}/></button>
      <button className="logo-btn" onClick={()=>setPage("home")}><Logo/></button>
      <nav className={mobile?"nav open":"nav"}>
        {[['home','Home'],['how','How It Works'],['about','About'],['contact','Contact Us']].map(([id,label])=><button key={id} className={page===id?"active":""} onClick={()=>{(onNavigate||setPage)(id);setMobile(false)}}>{label}</button>)}
      </nav>
      <div className="header-actions">
        <button className="icon-btn cart-btn" onClick={()=>setShowCart(true)}><Icon name="cart"/>{cartCount>0&&<em>{cartCount}</em>}</button>
        <div className="account-menu-wrap" ref={accountRef}>
          <button className={user?"avatar-btn":"account-trigger"} onClick={()=>setAccountOpen(v=>!v)} aria-label="Account"><span>{user ? (user.name?.[0]?.toUpperCase()||"U") : <Icon name="user" size={18}/>}</span></button>
          {accountOpen && <div className="account-menu">
            {user ? <>
              <div className="account-menu-head"><strong>{user.name||"Member"}</strong><small>{user.email}</small></div>
              <button onClick={()=>{(onNavigate||setPage)("rentals");setAccountOpen(false)}}><Icon name="user" size={16}/> My Dashboard</button>
              <button onClick={()=>{onLogout?.();setAccountOpen(false)}}><Icon name="logout" size={16}/> Logout</button>
              <div className="account-divider"/>
            </> : <>
              <div className="account-menu-head"><strong>Account</strong><small>Choose how you want to sign in</small></div>
              <button onClick={()=>{setShowAuth("login");setAccountOpen(false)}}><Icon name="user" size={16}/> User Login</button>
              <div className="account-divider"/>
              <button className="account-signup" onClick={()=>{setShowAuth("signup");setAccountOpen(false)}}>Create User Account</button>
            </>}
          </div>}
        </div>
        {!user && <button className="signup-btn" onClick={()=>setShowAuth("signup")}>Sign Up</button>}
      </div>
    </div>
  </header>;
}
function ProductCard({p,onView,onAdd,offer}) {
  const open=()=>onView(p);
  const rentalBase=Number(p.price3Month || p.price*3);
  const offerApplies=offer?.enabled && (offer.category==="All Equipment" || offer.category===p.category);
  const rentalPrice=offerApplies
    ? Math.round(rentalBase*(100-Number(offer.discount||0))/100)
    : rentalBase;
  return <article className="product-card clickable-product" role="button" tabIndex={0}
    onClick={open} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}}}>
    <button className="product-img" onClick={e=>{e.stopPropagation();open()}}><img src={p.image} alt={p.name}/></button>
    <div className="product-info">
      <h3>{p.name}</h3>
      <p>{p.meta}</p>
      {p.category==="Treadmills" && <div className="weight-chip">Max user weight: {p.maxWeight} kg</div>}
      <div className="price-row">
        {offerApplies ? (
          <div className="offer-price">
            <div className="offer-price-main">
              <del>{money(rentalBase)}</del>
              <strong>{money(rentalPrice)}</strong>
              <small>/ 3 months</small>
            </div>
            <span className="offer-badge">{Number(offer.discount||0)}% OFF</span>
          </div>
        ) : (
          <strong>{money(rentalPrice)} <small>/ 3 months</small></strong>
        )}
        <span className="rating">★ {p.rating}</span>
      </div>
      <button className="dark-btn small" onClick={e=>{e.stopPropagation();onAdd({...p,rentalPrice},3,1)}}>Add to Cart</button>
    </div>
  </article>;
}

function WhatsAppChat(){
  const [open,setOpen]=useState(false);
  const [message,setMessage]=useState("");
  // Replace this with the website owner's WhatsApp number (country code + number, no + or spaces).
  const adminNumber="9899194863";

  const sendWhatsApp=()=>{
    const clean=message.trim();
    if(!clean) return;
    const text=encodeURIComponent(`Hi InHouseGym, I have a question: ${clean}`);
    window.open(`https://wa.me/${adminNumber}?text=${text}`,"_blank","noopener,noreferrer");
  };

  return <div className="wa-support">
    {open&&<div className="wa-panel" role="dialog" aria-label="WhatsApp support">
      <div className="wa-head">
        <div className="wa-avatar">IG</div>
        <div><strong>InHouseGym Support</strong><span>Ask us about rentals & equipment</span></div>
        <button className="wa-close" onClick={()=>setOpen(false)} aria-label="Close chat">×</button>
      </div>
      <div className="wa-body">
        <div className="wa-bubble">Hi 👋 How can we help you today?</div>
      </div>
      <div className="wa-compose">
        <textarea value={message} onChange={e=>setMessage(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendWhatsApp();}}} placeholder="Type your doubt..." rows="2" />
        <button onClick={sendWhatsApp} aria-label="Send on WhatsApp">➤</button>
      </div>
      <div className="wa-note">Opens WhatsApp with your message ready to send.</div>
    </div>}
    <button className="wa-fab" onClick={()=>setOpen(v=>!v)} aria-label="Chat with InHouseGym on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C9.42 3 4.05 8.3 4.05 14.84c0 2.3.67 4.54 1.94 6.46L4 28.5l7.43-1.94a12.1 12.1 0 0 0 4.6.91h.01c6.62 0 12-5.3 12-11.84C28.04 9.1 22.66 3 16.04 3Zm0 22.47h-.01a10.1 10.1 0 0 1-4.15-.88l-.53-.23-4.41 1.15 1.18-4.25-.27-.55a9.77 9.77 0 0 1-1.02-4.34c0-5.44 4.47-9.86 9.97-9.86 5.5 0 9.98 4.42 9.98 9.86 0 5.43-4.48 9.86-9.98 9.86Zm5.47-7.39c-.3-.15-1.77-.86-2.04-.96-.28-.1-.48-.15-.68.15-.2.3-.78.96-.96 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a8.9 8.9 0 0 1-1.66-2.04c-.18-.3-.02-.46.13-.6.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.25-.59-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.37-.28.3-1.06 1.03-1.06 2.5 0 1.48 1.09 2.9 1.24 3.1.15.2 2.14 3.23 5.18 4.53.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/></svg>
    </button>
  </div>;
}

// Offer ribbon ka theme offer ke TITLE se auto banta hai —
// admin jo festival likhega, banner usi rang-sajawat me dikhega.
function getOfferTheme(title = "") {
  const t = String(title).toLowerCase();
  if (/diwali|deepavali|deepawali|dhanteras/.test(t)) return { icon: "🪔", bg: "linear-gradient(90deg,#4a0e18,#7b1230 35%,#a31621 55%,#5c0a2e)" };
  if (/dussehra|dusshera|dussera|vijayadashami|ram navami/.test(t)) return { icon: "🏹", bg: "linear-gradient(90deg,#7c2d12,#ea580c 45%,#f59e0b)" };
  if (/navratri|durga|dandiya|garba/.test(t)) return { icon: "💃", bg: "linear-gradient(90deg,#7a0c02,#d9381e 40%,#f97316 70%,#b91c1c)" };
  if (/ganesh|ganpati|vinayagar/.test(t)) return { icon: "🐘", bg: "linear-gradient(90deg,#7f1d1d,#c2410c 50%,#b45309)" };
  if (/holi/.test(t)) return { icon: "🎨", bg: "linear-gradient(90deg,#d6336c,#f59e0b 30%,#22c55e 60%,#3b82f6)" };
  if (/christmas|xmas|santa|winter/.test(t)) return { icon: "🎄", bg: "linear-gradient(90deg,#052e16,#166534 45%,#991b1b)" };
  if (/new year|newyear|nye/.test(t)) return { icon: "🎉", bg: "linear-gradient(90deg,#0b1026,#1e3a8a 45%,#b45309)" };
  if (/eid|ramadan|ramzan/.test(t)) return { icon: "🌙", bg: "linear-gradient(90deg,#022c22,#065f46 50%,#92400e)" };
  if (/karwa/.test(t)) return { icon: "🌙", bg: "linear-gradient(90deg,#831843,#be185d 50%,#9f1239)" };
  if (/independence|republic|tiranga|15 august|26 january/.test(t)) return { icon: "🇮🇳", bg: "linear-gradient(90deg,#f97316 0%,#f8fafc 50%,#16a34a 100%)", dark: true };
  if (/birthday|anniversary/.test(t)) return { icon: "🎂", bg: "linear-gradient(90deg,#701a75,#db2777 50%,#7c3aed)" };
  if (/valentine|love/.test(t)) return { icon: "❤️", bg: "linear-gradient(90deg,#881337,#e11d48 50%,#9f1239)" };
  if (/summer|garmi/.test(t)) return { icon: "☀️", bg: "linear-gradient(90deg,#92400e,#f59e0b 50%,#ea580c)" };
  if (/monsoon|saawan|sawan|rainy/.test(t)) return { icon: "🌧️", bg: "linear-gradient(90deg,#0c4a6e,#0369a1 50%,#0e7490)" };
  if (/rakhi|raksha/.test(t)) return { icon: "🧵", bg: "linear-gradient(90deg,#7c2d12,#ea580c 45%,#b91c1c)" };
  if (/bhai dooj|bhaidooj/.test(t)) return { icon: "🎁", bg: "linear-gradient(90deg,#713f12,#d97706 50%,#b45309)" };
  if (/teej/.test(t)) return { icon: "🌿", bg: "linear-gradient(90deg,#14532d,#16a34a 50%,#65a30d)" };
  if (/chhath/.test(t)) return { icon: "🌅", bg: "linear-gradient(90deg,#7c2d12,#f97316 55%,#facc15)" };
  if (/akshaya/.test(t)) return { icon: "🪙", bg: "linear-gradient(90deg,#713f12,#d97706 50%,#f59e0b)" };
  if (/wedding|shaadi|marriage/.test(t)) return { icon: "💍", bg: "linear-gradient(90deg,#831843,#db2777 40%,#b45309)" };
  if (/women|mahila/.test(t)) return { icon: "💜", bg: "linear-gradient(90deg,#4a044e,#a21caf 50%,#7e22ce)" };
  if (/mother|mom/.test(t)) return { icon: "🌸", bg: "linear-gradient(90deg,#831843,#ec4899 50%,#f472b6)" };
  if (/pongal|onam|ugadi|bihu|lohri|makar/.test(t)) return { icon: "🌾", bg: "linear-gradient(90deg,#365314,#65a30d 45%,#b45309)" };
  return { icon: "🏷️", bg: "linear-gradient(90deg,#7f1d1d,#dc2626 50%,#991b1b)" };
}


function Home({setPage,onView,onAdd,onCategory,products,offer}) {
  const categories=[
    ["Treadmills","Treadmills"],
    ["Cross Trainers","Cross Trainers"],
    ["Exercise Bikes","Exercise Bikes"]
  ];

  // HERO SLIDESHOW — 3 images, page/gate slide effect
  const heroSlides=[
    {src:'https://i.pinimg.com/1200x/3d/b2/46/3db246e0de06dd63eaee8dd9f16e9411.jpg',alt:'Treadmill training at home',pos:'center 30%'},
    {src:'https://i.pinimg.com/1200x/ab/c3/dd/abc3dda7932eae0c101cd599d90a819d.jpg',alt:'Premium gym equipment collection',pos:'center'},
    {src:'https://i.pinimg.com/1200x/89/b2/6f/89b26f9767464087b6471be0b3e85de5.jpg',alt:'Fitness workout at home',pos:'center 40%'}
  ];
  const [heroIdx,setHeroIdx]=useState(0);
  const [heroPrevIdx,setHeroPrevIdx]=useState(null);
  const goHero=(n)=>{
    const next=(n+heroSlides.length)%heroSlides.length;
    if(next===heroIdx) return;
    setHeroPrevIdx(heroIdx);
    setHeroIdx(next);
  };
  useEffect(()=>{
    const id=setInterval(()=>goHero(heroIdx+1),3000);
    return()=>clearInterval(id);
  },[heroIdx]);

  useEffect(()=>{
    const nodes=[...document.querySelectorAll('.home-v2 .story-reveal')];
    if(!nodes.length) return;
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.14});
    nodes.forEach(node=>observer.observe(node));
    return()=>observer.disconnect();
  },[]);

  const popular=products.filter(p=>p.popular===true).slice(0,5);
  const goalCards=[
    {title:'Cardio & Endurance',label:'Treadmills',image:'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=85',cat:'Treadmills'},
    {title:'Full Body Training',label:'Cross Trainers',image:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',cat:'Cross Trainers'},
    {title:'Everyday Fitness',label:'Exercise Bikes',image:'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1000&q=85',cat:'Exercise Bikes'}
  ];

  return <main className="home-v2">
    <section className="home-v2-hero">
      <div className="home-v2-hero-slides" aria-hidden="true">
        {heroSlides.map((s,i)=>(
          <div key={s.src} className={`home-v2-hero-slide${i===heroIdx?' is-active':i===heroPrevIdx?' is-prev':''}`} style={{backgroundImage:`url('${s.src}')`,backgroundPosition:s.pos}}/>
        ))}
      </div>
      <div className="home-v2-hero-shade"/>
      {offer?.enabled && (() => {
        const theme = getOfferTheme(offer.title);
        const offerName = String(offer.title || "SPECIAL SALE").trim().toUpperCase();
        const offerScope = offer.category === "All Equipment" ? "ALL EQUIPMENT" : String(offer.category || "").toUpperCase();
        return (
          <div className={`offer-ribbon${theme.dark ? " offer-ribbon-dark" : ""}`} style={{ background: theme.bg }}>
            <span className="offer-ribbon-lights" aria-hidden="true" />
            <span className="offer-ribbon-icon" aria-hidden="true">{theme.icon}</span>
            <span className="offer-ribbon-text">
              <b>{offerName}</b>
              <i aria-hidden="true">•</i>
              <strong>FLAT {Number(offer.discount || 0)}% OFF</strong>
              <i aria-hidden="true">•</i>
              <span>ON {offerScope}</span>
            </span>
            <span className="offer-ribbon-icon" aria-hidden="true">{theme.icon}</span>
          </div>
        );
      })()}
      <div className="home-v2-hero-content">

        <span className="home-v2-eyebrow">YOUR HOME GYM, JUST A CLICK AWAY</span>
        <h1>RENT FITNESS EQUIPMENTS<br/><span>AT HOME</span></h1>
        <p>Premium gym equipment delivered to your doorstep. Rent the gear you need, workout your way, and return it when you're done.</p>
        <div className="home-v2-actions">
          {categories.map(([label,key])=><button key={key} onClick={()=>onCategory(key)}>{label}<Icon name="arrow" size={15}/></button>)}
        </div>
        <div className="home-v2-stats">
          <span><b>COD</b><small>Pay at Your Door</small></span>
          <span><b>Delivery</b><small>within 48 hours</small></span>
          <span><b> Free</b><small>Home Delivery</small></span>
        </div>
      </div>
      <div className="home-v2-hero-dots" aria-label="Home banner slides">
        {heroSlides.map((s,i)=><button key={s.src} type="button" aria-label={`Slide ${i+1}: ${s.alt}`} aria-current={i===heroIdx} className={i===heroIdx?'is-active':''} onClick={()=>goHero(i)}/>)}
      </div>
      <div className="home-v2-scroll"><span/>Scroll to explore</div>
    </section>

    <section className="home-v2-popular story-reveal">
      <div className="home-v2-section-head">
        <div><span className="home-v2-kicker">OUR COLLECTION</span><h2>Popular Equipment</h2></div>
        <button className="home-v2-viewall" onClick={()=>onCategory('All Equipment')}>View all <Icon name="arrow" size={15}/></button>
      </div>
      <div className="home-v2-products">
        {popular.map(p=><ProductCard key={p.id} p={p} onView={onView} onAdd={onAdd} offer={offer}/>)}
      </div>
    </section>

    <section className="home-v2-story story-reveal">
      <div className="home-v2-story-copy">
        <span className="home-v2-kicker">RENT. WORKOUT. REPEAT.</span>
        <h2>A better way to<br/><span>train at home.</span></h2>
        <p>Why buy expensive equipment you'll use for a few months? With InHouseGym, you can bring professional-grade equipment home without the long-term commitment.</p>
        <div className="home-v2-steps">
          <div><b>01</b><span><strong>Choose</strong><small>Pick the equipment that fits your routine.</small></span></div>
          <div><b>02</b><span><strong>Book</strong><small>Select your rental duration and checkout.</small></span></div>
          <div><b>03</b><span><strong>Train</strong><small>We deliver clean, ready-to-use equipment.</small></span></div>
          <div><b>04</b><span><strong>Return</strong><small>Finish your rental and return with ease.</small></span></div>
        </div>
        <button className="home-v2-primary" onClick={()=>setPage('how')}>Learn how it works <Icon name="arrow" size={16}/></button>
      </div>
    </section>

    <section className="home-v2-goals story-reveal">
      <div className="home-v2-section-head centered"><div><span className="home-v2-kicker">FITNESS FOR EVERY GOAL</span><h2>Find your way to move.</h2><p>From everyday cardio to serious training, choose equipment that matches your space and your goals.</p></div></div>
      <div className="home-v2-goal-grid">
        {goalCards.map((g,i)=><button className="home-v2-goal-card" key={g.cat} onClick={()=>onCategory(g.cat)}>
          <img src={g.image} alt={g.title}/><span className="home-v2-goal-shade"/><span className="home-v2-goal-number">0{i+1}</span><span className="home-v2-goal-copy"><small>{g.label}</small><strong>{g.title}</strong><em>Explore <Icon name="arrow" size={14}/></em></span>
        </button>)}
      </div>
    </section>

    <section className="home-v2-benefits story-reveal">
      <div className="home-v2-benefit-image"><img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=88" alt="Fitness training"/></div>
      <div className="home-v2-benefit-copy">
        <span className="home-v2-kicker">WHY INHOUSEGYM</span><h2>Everything you need.<br/><span>Nothing you don't.</span></h2>
        <div className="home-v2-benefit-list">
          {[["box","Flexible Rentals","Choose 3 or 6 months rental periods."],["shield","Clean & Maintained","Every piece is inspected before delivery."],["clock","Fast Delivery","Convenient doorstep delivery in your area."],["card","Secure Payments","Simple and secure checkout experience."]].map(([ic,t,d])=><div key={t}><i><Icon name={ic}/></i><span><b>{t}</b><small>{d}</small></span></div>)}
        </div>
      </div>
    </section>

    <section className="home-v2-testimonials story-reveal">
      <div className="home-v2-testimonial-inner">
        <span className="home-v2-kicker">FROM OUR CUSTOMERS</span><h2>Real people. Real results.</h2>
        <div className="home-v2-quote"><div className="home-v2-avatar">RK</div><div><p>“The equipment was in excellent condition and delivery was right on time. The experience made home workouts so much easier.”</p><b>Rohit Kumar</b><small>Home Fitness Enthusiast</small><div className="home-v2-stars">★★★★★</div></div></div>
      </div>
    </section>

    <section className="home-v2-cta story-reveal">
      <div><span className="home-v2-kicker">READY TO START?</span><h2>Your fitness journey<br/><span>starts here.</span></h2><p>Choose your equipment, pick your rental period, and get training.</p></div>
      <button onClick={()=>onCategory('All Equipment')}>Explore equipment <Icon name="arrow" size={16}/></button>
    </section>
  </main>;
}

function Shop({onView,onAdd,initialCategory="All Equipment",products,offer}) {
  const [cat,setCat]=useState(initialCategory), [weight,setWeight]=useState("all");
  useEffect(()=>{setCat(initialCategory);setWeight("all")},[initialCategory]);
  const cats=["Treadmills","Cross Trainers","Exercise Bikes"];
const weightGroups=[
  {
    id:"premium",
    label:"Standard Load",
    capacity:"Up to 110 kg",
    desc:"Ideal for light to regular workouts",
    test:p=>p.treadmillTier==="premium"
  },
  {
    id:"gold",
    label:"High Load",
    capacity:"Up to 135 kg",
    desc:"Built for higher-capacity workouts",
    test:p=>p.treadmillTier==="gold"
  },
  {
    id:"elite",
    label:"Max Load",
    capacity:"Above 135 kg",
    desc:"Heavy-duty support for higher loads",
    test:p=>p.treadmillTier==="elite"
  }
];
  const matchesWeight=p=>cat!=="Treadmills" || weight==="all" || weightGroups.find(g=>g.id===weight)?.test(p);
  const list=products.filter(p=>(cat==="All Equipment"||p.category===cat)&&matchesWeight(p));
  const activeWeight=weightGroups.find(g=>g.id===weight);
  return <main className="page shop-page">
    <div className="shop-top"><div><span className="crumb">Home / Shop</span><h1>{cat==="All Equipment"?"All Equipment":cat}</h1>{cat==="Treadmills"&&<p className="shop-subtitle">Choose a treadmill according to the maximum user weight you need.</p>}</div></div>
    {cat==="All Equipment" && <div className="shop-category-tabs">
      {cats.map((c,i)=><button key={c} className={cat===c?"selected":""} onClick={()=>{setCat(c);setWeight("all")}}><span>0{i+1}</span>{c}<Icon name="arrow" size={15}/></button>)}
    </div>}
    {cat==="Treadmills" ? <div className="weight-shop-layout">
      <aside className="weight-sidebar">
        <div className="weight-side-title"><span className="section-kicker">TREADMILLS</span><h2>Choose by<br/>weight capacity</h2></div>
        <select className="weight-select" value={weight} onChange={e=>setWeight(e.target.value)} aria-label="Choose by weight capacity">
  <option value="all">All Treadmills — View every model</option>
  {weightGroups.map(g=><option key={g.id} value={g.id}>{g.label} — {g.capacity}</option>)}
</select>

        <button
  className={weight==="all" ? "weight-filter all-treadmills selected" : "weight-filter all-treadmills"}
  onClick={()=>setWeight("all")}
>
  <span className="weight-filter-text">
    <b>All Treadmills</b>
    <small>View every model available</small>
  </span>

  <span className="weight-arrow">›</span>
</button>

{weightGroups.map(g=>(
  <button
    key={g.id}
    className={`weight-filter ${g.id} ${weight===g.id ? "selected" : ""}`}
    onClick={()=>setWeight(g.id)}
  >
    <span className="weight-filter-text">
      <strong className="weight-plan">{g.label}</strong>
      <b>{g.capacity}</b>
      <small>{g.desc}</small>
    </span>

    <span className="weight-arrow">›</span>
  </button>
))}
      </aside>
      <section className="weight-results">
        <div className="weight-result-head"><div><span className="section-kicker">
  {activeWeight ? activeWeight.label.toUpperCase() : "ALL TREADMILLS"}
</span>

<h2>
  {activeWeight
    ? activeWeight.capacity
    : "Find the right treadmill for your needs"}
</h2></div><span className="result-count">{list.length} equipment</span></div>
        {list.length ? <div className="product-grid three">{list.map(p=><ProductCard
  key={p.id}
  p={p}
  onView={onView}
  onAdd={onAdd}
  offer={offer}
/>)}</div> : <div className="empty weight-empty"><div>🏃</div><h3>No treadmill in this weight range</h3><p>We currently don't have a treadmill in this capacity range.</p></div>}
      </section>
    </div> : <div className="shop-layout single-shop-layout">
      <section><div className="results-row"><span>{list.length} equipment</span></div><div className="product-grid three">{list.map(p=><ProductCard key={p.id} p={p} onView={onView} onAdd={onAdd} offer={offer}/>)}</div></section>
    </div>}
  </main>;
}

function ProductDetail({p,onBack,onAdd,onRentNow,offer}) {
  const [duration,setDuration] = useState(3);
  const [qty,setQty] = useState(1);
  const [activeTab,setActiveTab] = useState("description");
  const [activeGalleryImage,setActiveGalleryImage] = useState(p.image);
  // Sirf product ki apni ek hi image dikhegi — dusre equipments ki
  // images gallery me nahi ayengi.
  const galleryImages = [p.image].filter(Boolean);

  useEffect(() => {
    setActiveGalleryImage(p.image);
  }, [p.id, p.image]);

  // Automatically advance the gallery every 3 seconds for every equipment.
  useEffect(() => {
    if (galleryImages.length < 2) return undefined;

    const slideshowTimer = window.setInterval(() => {
      setActiveGalleryImage(currentImage => {
        const currentIndex = galleryImages.indexOf(currentImage);
        const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % galleryImages.length;
        return galleryImages[nextIndex];
      });
    }, 3000);

    return () => window.clearInterval(slideshowTimer);
  }, [p.id, p.image]);

  // Prices entered by the admin are the source for the 3-month / 6-month options.
  // Older products that do not have these fields fall back to the existing base price.
  const baseRentalPrice = duration === 3
    ? Number(p.price3Month || p.price * 3)
    : Number(p.price6Month || p.price * 6);

  const pricePerRental = offer?.enabled &&
    (offer.category === "All Equipment" || offer.category === p.category)
      ? Math.round(baseRentalPrice * (100 - Number(offer.discount || 0)) / 100)
      : baseRentalPrice;

  const decreaseQty = () => setQty(q => Math.max(1, q - 1));
  const increaseQty = () => setQty(q => q + 1);

  const rentalItem = {
    ...p,
    selectedDuration: duration,
    rentalMonths: duration,
    rentalPrice: pricePerRental
  };

  const handleAdd = () => {
    onAdd(rentalItem, duration, qty);
  };

  const handleRentNow = () => {
    onRentNow(rentalItem, duration, qty);
  };

  return (
    <main className="page detail-page">

      <button className="back-btn" onClick={onBack}>
        <Icon name="back" size={16}/> Back to Shop
      </button>

      <div className="detail">

        {/* SOFT-CARD PRODUCT GALLERY — Design 4 */}
        <div className={`detail-gallery design4-gallery${galleryImages.length < 2 ? " single" : ""}`}>
          {galleryImages.length > 1 && (<div className="detail-thumbs" aria-label="Product images">
            {galleryImages.map((src, index) => (
              <button type="button" key={src} className={`detail-thumb ${activeGalleryImage === src ? "active" : ""}`}
                onClick={() => setActiveGalleryImage(src)} aria-label={`View product image ${index + 1}`}>
                <img src={src} alt={`${p.name} view ${index + 1}`} />
              </button>
            ))}
          </div>)}
          <div className="detail-image-wrap">
            <span className="detail-popular-badge">Popular</span>
            <div className="detail-image">
              <img src={activeGalleryImage || p.image} alt={p.name}/>
            </div>
            {galleryImages.length > 1 && <div className="gallery-dots" aria-label="Image selection">
              {galleryImages.map(src => <button key={src} type="button" className={activeGalleryImage === src ? "active" : ""} onClick={() => setActiveGalleryImage(src)} aria-label="Select image" />)}
            </div>}
          </div>
        </div>


        {/* RIGHT CONTENT */}
        <div className="detail-copy">

          <div className="detail-category">{p.category || "Gym Equipment"}</div>

          <div className="rating-large">
            ★★★★★
            <span>
              {p.rating} ({p.reviews} reviews)
            </span>
          </div>

          <h1>{p.name}</h1>

          {p.maxWeight && (
            <div className="detail-weight">
              <span>Maximum User Weight</span>
              <b>{p.maxWeight} kg</b>
            </div>
          )}


          {/* PRICE */}
          <div className="detail-price">

            <strong>
              {money(pricePerRental)}
            </strong>

            <small>
              / {duration} months
            </small>

            {offer?.enabled &&
              (offer.category === "All Equipment" ||
               offer.category === p.category) && (
                <span className="offer-badge">
                  {offer.discount}% OFF
                </span>
            )}

          </div>


          {/* DELIVERY INFO PILLS */}
          <div className="delivery-pills">
            <span className="delivery-pill cod">💵 COD</span>
            <span className="delivery-pill ncr">📍 Delivery Only in NCR Regions</span>
            <span className="delivery-pill fast">🚚 Delivery Within 48 Hours</span>

          </div>

          <p className="detail-desc">
            {p.description}
          </p>


          {/* HIGHLIGHTS */}
          <div className="spec-pills">

            <span>✓ Multi-position</span>

            {p.maxWeight && (
              <span>
                ✓ Max user weight: {p.maxWeight} kg
              </span>
            )}

            <span>✓ Compact design</span>

          </div>


          {/* RENTAL DURATION */}
          <h4>Rental Duration</h4>

          <div className="duration-row">

            <button
              className={duration === 3 ? "chosen" : ""}
              onClick={() => setDuration(3)}
            >
              3 Months
            </button>

            <button
              className={duration === 6 ? "chosen" : ""}
              onClick={() => setDuration(6)}
            >
              6 Months
            </button>

          </div>


          {/* QUANTITY + CART */}
          <div className="detail-actions">

            <div className="detail-rent-actions">
              <button
                className="dark-btn detail-rent-now"
                onClick={handleRentNow}
              >
                Rent Now
                <Icon name="arrow" size={17}/>
              </button>

              <button
                className="outline-btn detail-add-cart"
                onClick={handleAdd}
              >
                Add to Cart
              </button>
            </div>

          </div>


        </div>
      </div>

      {/* FULL-WIDTH DETAILS BELOW THE IMAGE AND PRODUCT PANEL */}
      <section className="detail-lower-panel">
          {/* TABS */}
          <div className="tabs">

            <button
              type="button"
              className={activeTab === "description" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveTab("description"); }}
            >
              Description
            </button>

            <button
              type="button"
              className={activeTab === "specifications" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveTab("specifications"); }}
            >
              Specifications
            </button>

            <button
              type="button"
              className={activeTab === "reviews" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); setActiveTab("reviews"); }}
            >
              Reviews
            </button>

          </div>


          {/* TAB CONTENT */}
          <div className="tab-copy">

            {activeTab === "description" && (
              <>
                <h3>About this equipment</h3>

                <p>
                  {p.description}
                </p>

                {p.details?.length ? (
                  <ul className="detail-spec-list">
                    {p.details.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : (
                  <p>
                    This equipment is designed for comfortable,
                    reliable workouts at home. It is maintained
                    before every rental and delivered ready to use.
                  </p>
                )}
              </>
            )}


            {activeTab === "specifications" && (
              <div className="detail-specifications">

                <div>
                  <span>Equipment</span>
                  <b>{p.name}</b>
                </div>

                <div>
                  <span>Category</span>
                  <b>{p.category}</b>
                </div>

                {p.maxWeight && (
                  <div>
                    <span>Maximum User Weight</span>
                    <b>{p.maxWeight} kg</b>
                  </div>
                )}

                <div>
                  <span>Rental Options</span>
                  <b>3 Months / 6 Months</b>
                </div>

                <div>
                  <span>Rating</span>
                  <b>★ {p.rating}/5</b>
                </div>

              </div>
            )}


            {activeTab === "reviews" && (
              <div className="reviews-content">

                <div className="review-summary">
                  <strong>{p.rating}</strong>
                  <span>★★★★★</span>
                  <small>
                    Based on {p.reviews} customer reviews
                  </small>
                </div>

                <div className="review-item">
                  <div>★★★★★</div>
                  <b>Great equipment</b>
                  <p>
                    Equipment was clean, well maintained
                    and delivered on time.
                  </p>
                </div>

                <div className="review-item">
                  <div>★★★★★</div>
                  <b>Very convenient rental</b>
                  <p>
                    The rental process was simple and
                    the equipment worked perfectly.
                  </p>
                </div>

              </div>
            )}

          </div>

      </section>
    </main>
  );
}

function Cart({items,setItems,onCheckout,onClose}) {

  const getRentalPrice = (item) => {
    if (item.rentalPrice != null) return Number(item.rentalPrice);
    if (item.rentalMonths === 3) return Number(item.price3Month || item.price * 3);
    if (item.rentalMonths === 6) return Number(item.price6Month || item.price * 6);
    return Number(item.price);
  };

  const total = items.reduce(
    (s, i) => s + getRentalPrice(i) * i.qty,
    0
  );

  const update=(key,delta)=>
    setItems(
      items.map(i =>
        i.key===key
          ? {...i,qty:Math.max(1,i.qty+delta)}
          : i
      )
    );

  return (
    <div
      className="modal-backdrop"
      onMouseDown={e=>e.target===e.currentTarget&&onClose()}
    >
      <aside className="cart-drawer">

        <div className="drawer-head">
          <div>
            <span className="section-kicker">YOUR ORDER</span>
            <h2>Your Cart ({items.length})</h2>
          </div>

          <button className="icon-btn" onClick={onClose}>
            <Icon name="close"/>
          </button>
        </div>

        {items.length===0 ?

          <div className="empty">
            <div>🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add some equipment to start your rental.</p>
          </div>

        :

          <>
            <div className="cart-items">

              {items.map(i=>
                <div className="cart-item" key={i.key}>

                  <img src={i.image} alt={i.name}/>

                  <div className="cart-item-copy">

                    <b>{i.name}</b>

                    <span>{i.meta}</span>

                    <strong>
                      {money(getRentalPrice(i))}
                    </strong>

                    <small>
                      {i.rentalMonths === 3
                        ? "3 month rental"
                        : i.rentalMonths === 6
                        ? "6 month rental"
                        : "Rental"}
                    </small>

                    <div className="mini-qty">
                      <button onClick={()=>update(i.key,-1)}>
                        -
                      </button>

                      <span>{i.qty}</span>

                      <button onClick={()=>update(i.key,1)}>
                        +
                      </button>
                    </div>

                  </div>

                  <button
                    className="trash"
                    onClick={()=>setItems(
                      items.filter(x=>x.key!==i.key)
                    )}
                  >
                    <Icon name="trash" size={16}/>
                  </button>

                </div>
              )}

            </div>

            <div className="cart-summary">

              <div>
                <span>Subtotal</span>
                <b>{money(total)}</b>
              </div>

              <div>
                <span>Delivery</span>
                <b>FREE</b>
              </div>

              <hr/>

              <div className="total">
                <span>Total Amount</span>
                <b>{money(total)}</b>
              </div>

              <button
                className="dark-btn full"
                onClick={onCheckout}
              >
                Proceed to Checkout
                <Icon name="arrow" size={17}/>
              </button>

            </div>
          </>
        }

      </aside>
    </div>
  );
}

function Auth({mode,setMode,onClose,onLogin}) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [showPass,setShowPass]=useState(false);
  const [error,setError]=useState("");

  const validEmail=(value)=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value.trim());

  const submit=async e=>{
    e.preventDefault();
    setError("");
    const cleanEmail=email.trim().toLowerCase();

    if(!validEmail(cleanEmail)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!pass || pass.length<6){
      setError("Password must be at least 6 characters.");
      return;
    }

    const users=getStorage("fitrent_users",[]);

    if(mode==="signup"){
      if(!name.trim()){
        setError("Please enter your full name.");
        return;
      }
      if(users.some(u=>(u.email||"").toLowerCase()===cleanEmail)){
        setError("An account with this email already exists. Please login.");
        return;
      }
      const newUser={
        id:Date.now(),
        name:name.trim(),
        email:cleanEmail,
        password:pass
      };
      // Backend par pehle try karo: agar account backend par pehle se hai to duplicate mat banao.
      // Backend offline ho to local save hi kaafi hai; admin migration baad me isko backend par le jayega.
      const backendSignup = await callApi("POST", `${API_URL}/api/auth/register`, { name: newUser.name, email: newUser.email, password: newUser.password }, false);
      if (backendSignup && backendSignup.status === 409) {
        setError("An account with this email already exists. Please login.");
        return;
      }
      localStorage.setItem("fitrent_users",JSON.stringify([...users,newUser]));
      // Do not auto-login after signup. Keep the auth modal open and
      // require the user to explicitly log in with the newly registered
      // email/password. This is especially important when Rent Now was
      // clicked by a guest: pendingRent remains intact until login succeeds.
      setName("");
      setPass("");
      setEmail(cleanEmail);
      setMode("login");
      setError("Account created successfully. Please login with your registered email and password.");
      return;
    }

    // Backend login pehle try karo — dusre device par bana account bhi isi se chalega.
    const backendLogin = await callApi("POST", `${API_URL}/api/auth/login`, { email: cleanEmail, password: pass }, false);
    if (backendLogin && backendLogin.ok && backendLogin.data) {
      const bu = backendLogin.data;
      const localAccount = users.find(u=>(u.email||"").toLowerCase()===cleanEmail);
      if (!localAccount) {
        localStorage.setItem("fitrent_users", JSON.stringify([...users, { id: bu._id || Date.now(), name: bu.name, email: bu.email, password: pass }]));
      } else if (localAccount.password !== pass) {
        localStorage.setItem("fitrent_users", JSON.stringify(users.map(u=>(u.email||"").toLowerCase()===cleanEmail ? { ...u, password: pass } : u)));
      }
      onLogin({ name: bu.name || cleanEmail.split("@")[0], email: bu.email });
      return;
    }
    const account=users.find(u=>(u.email||"").toLowerCase()===cleanEmail && u.password===pass);
    if(!account){
      setError("Incorrect email or password. Please use the email and password from your registered account.");
      return;
    }
    onLogin({name:account.name||cleanEmail.split("@")[0],email:account.email});
  };

  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className="auth-card">
    <button className="modal-close" onClick={onClose}><Icon name="close"/></button>
    <Logo/><span className="section-kicker">{mode==="login"?"WELCOME BACK":"JOIN FITRENT"}</span><h2>{mode==="login"?"Login to your account":"Create your account"}</h2>
    <form onSubmit={submit} autoComplete="off">
    {mode==="signup"&&<label>Full Name *<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" required/></label>}
  <label>Email Address<input type="email" name="customer-email" value={email} onChange={e=>{setEmail(e.target.value);setError("")}} onBlur={()=>email && !validEmail(email) && setError("Please enter a valid email address.")} onFocus={e=>e.currentTarget.removeAttribute("readonly")} placeholder="you@example.com" autoComplete="off" readOnly required/></label>
    <label>Password
      <div className="password-field">
        <input
          type={showPass ? "text" : "password"}
          name="customer-password"
          value={pass}
          onChange={e=>{setPass(e.target.value);setError("")}}
          onFocus={e=>e.currentTarget.removeAttribute("readonly")}
          placeholder="Enter your password"
          autoComplete="new-password"
          minLength={6}
          readOnly
          required
        />
        <button
          type="button"
          className="password-toggle"
          onClick={()=>setShowPass(v=>!v)}
          aria-label={showPass ? "Hide password" : "Show password"}
          title={showPass ? "Hide password" : "Show password"}
        >
          {showPass ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2.2 12s3.5-5.5 9.8-5.5S21.8 12 21.8 12 18.3 17.5 12 17.5 2.2 12 2.2 12Z"/>
              <circle cx="12" cy="12" r="2.8"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 3l18 18"/>
              <path d="M9.9 6.8A10.7 10.7 0 0 1 12 6.5c6.3 0 9.8 5.5 9.8 5.5a17.8 17.8 0 0 1-3.1 3.4"/>
              <path d="M6.1 9.1A17.5 17.5 0 0 0 2.2 12S5.7 17.5 12 17.5c1.2 0 2.3-.2 3.3-.6"/>
            </svg>
          )}
        </button>
      </div>
    </label>
    {error&&<div className={error.startsWith("Account created successfully")?"auth-success":"auth-error"}>{error}</div>}

    {mode==="login"&&<div className="auth-options"><label className="check"><input type="checkbox"/> Remember me</label><button
  type="button"
  onClick={() => setMode("forgot")}
>
  Forgot password?
</button></div>}
    <button className="dark-btn full" type="submit">{mode==="login"?"Login":"Create Account"} <Icon name="arrow" size={16}/></button>
    </form>
    <div className="auth-switch">{mode==="login"?"Don't have an account?":"Already have an account?"} <button type="button" onClick={()=>{setError("");setMode(mode==="login"?"signup":"login")}}>{mode==="login"?"Sign Up":"Login"}</button></div>
    <div className="demo-note">Your account is saved on the server, so you can log in from any device.</div>
  </div></div>;
}

function Checkout({items,onClose,onSuccess}) {
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({name:"",phone:"",address:"",city:"",pin:"",aadhaar:"",pan:"",aadhaarFile:null,panFile:null,aadhaarFileName:"",panFileName:""});
  const total=items.reduce((s,i)=>s+Number(i.rentalPrice||i.price)*i.qty,0);
  const set=(k,v)=>setForm({...form,[k]:v});
  const readDocument=(key,fileKey,nameKey,file)=>{
    if(!file) return;
    if(file.size > 2 * 1024 * 1024){
      alert("Please upload a document smaller than 2 MB.");
      return;
    }
    if(!(file.type==="application/pdf" || file.type.startsWith("image/"))){
      alert("Please upload a PDF or image file.");
      return;
    }
    const reader=new FileReader();
    reader.onload=()=>setForm(f=>({...f,[key]:reader.result,[nameKey]:file.name}));
    reader.readAsDataURL(file);
  };

  if(step===3) return <div className="modal-backdrop"><div className="success-card"><div className="success-icon">✓</div><h2>Rental Confirmed!</h2><p>Your equipment rental has been placed successfully.</p><b>Order #FR{Math.floor(100000+Math.random()*899999)}</b><button className="dark-btn full" onClick={()=>onSuccess(form)}>View My Rentals</button></div></div>;

  return <div className="modal-backdrop"><div className="checkout-card">
    <div className="checkout-head"><div><span className="section-kicker">FITRENT CHECKOUT</span><h2>{step===1?"Shipping Details":"Payment Method"}</h2></div><button className="icon-btn" onClick={onClose}><Icon name="close"/></button></div>

    <div className="steps"><span className="done">1 <small>Shipping</small></span><i/><span className={step>=2?"done":""}>2 <small>Payment</small></span><i/><span>3 <small>Confirmation</small></span></div>

    {step===1 ? (
      <div className="form-grid">
        <label>Full Name *<input value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Your full name" required/></label>
        <label>Phone Number *<input value={form.phone} onChange={e=>set("phone",e.target.value.replace(/\D/g,"").slice(0,10))} placeholder="10 digit mobile number" inputMode="tel" maxLength={10} required/></label>

        <label className="wide">House Address *<textarea value={form.address} onChange={e=>set("address",e.target.value)} placeholder="House no. / street / locality" required/></label>
        <label>City<input value={form.city} onChange={e=>set("city",e.target.value)} placeholder="New Delhi" required/></label>
        <label>PIN Code *<input value={form.pin} onChange={e=>set("pin",e.target.value.replace(/\D/g,"").slice(0,6))} placeholder="110016" maxLength={6} inputMode="numeric" required/></label>

        <label>Aadhaar Number *<input value={form.aadhaar} onChange={e=>set("aadhaar",e.target.value.replace(/\D/g,""))} placeholder="12 digit Aadhaar number" maxLength={12} inputMode="numeric" required/>
          <span className="document-upload-label">Upload Aadhaar Card * <small>(PDF or image, max 2 MB)</small></span>
          <input className="document-file-input" type="file" accept="application/pdf,image/*" onChange={e=>readDocument("aadhaarFile","aadhaarFile","aadhaarFileName",e.target.files?.[0])} required/>
          {form.aadhaarFileName&&<small className="document-file-name">✓ {form.aadhaarFileName}</small>}
        </label>
        <label>PAN Number (Optional)<input value={form.pan} onChange={e=>set("pan",e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,10))} placeholder="ABCDE1234F" maxLength={10}/>

          <span className="document-upload-label">Upload PAN Card (Optional) <small>(PDF or image, max 2 MB)</small></span>
          <input className="document-file-input" type="file" accept="application/pdf,image/*" onChange={e=>readDocument("panFile","panFile","panFileName",e.target.files?.[0])}/>
          {form.panFileName&&<small className="document-file-name">✓ {form.panFileName}</small>}
        </label>
      </div>
    ) : (
      <div className="payment-single">
        <div className="payment-cod-card">
          <div className="payment-cod-icon">▣</div>
          <div>
            <b>Cash on Delivery</b>
            <p>Pay at delivery. No online payment required.</p>
          </div>
          <span className="payment-cod-check">✓</span>
        </div>
      </div>
    )}

    <div className="checkout-bottom">
      <div className="checkout-bottom-left">
        <div><span>Total Amount</span><strong>{money(total)}</strong></div>
        {step===2 && <button type="button" className="back-checkout-btn" onClick={()=>setStep(1)}>← Back to Shipping</button>}
      </div>
      <button className="dark-btn" onClick={()=>{
        if(step===1){
         if(!form.name.trim()||!form.phone||!form.address.trim()||!form.city.trim()||!form.pin||!form.aadhaar||!form.aadhaarFile){alert("Please fill all shipping details and upload your Aadhaar document.");return;}
         if(!/^[6-9]\d{9}$/.test(form.phone)){alert("Please enter a valid 10 digit mobile number.");return;}
         if(!/^\d{6}$/.test(form.pin)){alert("Please enter a valid 6 digit PIN code.");return;}
         if(!/^\d{12}$/.test(form.aadhaar)){alert("Please enter a valid 12 digit Aadhaar number.");return;}
         if(form.pan&&!/^[A-Z]{5}\d{4}[A-Z]$/.test(form.pan)){alert("Please enter a valid PAN number.");return;}

          setStep(2);
        } else setStep(3);
      }}>{step===1?"Continue to Payment":"Place Rental Order"} <Icon name="arrow" size={17}/></button>
    </div>
  </div></div>;
}

function RentalDetailsModal({r,onClose,onCancel}) {
  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
    <div className="rental-details-modal">
      <button className="modal-close" onClick={onClose}><Icon name="close"/></button>
      <span className="section-kicker">RENTAL DETAILS</span>
      <h2>{r.name}</h2>
      <div className="rental-detail-top">
        <img src={r.image} alt={r.name}/>
        <div><span className={`status ${r.status==='Cancelled'?'cancelled':''}`}>{r.status||"Active"}</span><p>Order #{r.order||"—"}</p><b>{money(r.rentalPrice||r.price)}</b><small>{r.duration||r.rentalMonths||3} month rental · Quantity {r.qty||1}</small></div>
      </div>
      <div className="rental-detail-grid">
        <div><span>Customer</span><b>{r.customerName||"—"}</b></div>
        <div><span>Phone</span><b>{r.customerPhone||"—"}</b></div>
        <div className="wide"><span>Delivery Address</span><b>{r.customerAddress||"—"}, {r.customerCity||""} {r.customerPin||""}</b></div>
      </div>
      {r.status!=='Cancelled' && <button className="cancel-rental-btn" onClick={()=>onCancel(r)}>Cancel Rental</button>}
    </div>
  </div>;
}

function Rentals({user,setPage,onLogout}) {
  const [rentals,setRentals]=useState(()=>getStorage("fitrent_rentals",[]));
  const [selectedRental,setSelectedRental]=useState(null);

  // My Rentals backend se bhi lao, taaki dusre device par login karne par bhi rentals dikhein.
  useEffect(()=>{
    if(!user?.email) return;
    let cancelled=false;
    (async()=>{
      const backendRentals = await getBackendJSON(`${API_URL}/api/rentals?email=${encodeURIComponent(user.email)}`, true);
      if(cancelled || !Array.isArray(backendRentals)) return;
      const mine = backendRentals.filter(r=>(r.customerEmail||"").toLowerCase()===user.email.toLowerCase());
      const localMine = getStorage("fitrent_rentals",[]).filter(r=>(r.customerEmail||"").toLowerCase()===user.email.toLowerCase() || !r.customerEmail);
      const merged = [...mine];
      localMine.forEach(lr=>{ if(!merged.some(mr=>(mr.id && lr.id && String(mr.id)===String(lr.id)) || (mr.order===lr.order && mr.name===lr.name))) merged.push(lr); });
      setRentals(merged);
      localStorage.setItem("fitrent_rentals", JSON.stringify(merged));
    })();
    return ()=>{cancelled=true};
  },[user?.email]);

  const cancelRental=(r)=>{
    if(!window.confirm("Are you sure you want to cancel this rental?")) return;
    const updated=rentals.map(item=>item.id===r.id ? {...item,status:"Cancelled",cancelledAt:new Date().toISOString(),cancelledBy:"Customer"} : item);
    setRentals(updated);
    localStorage.setItem("fitrent_rentals",JSON.stringify(updated));
    const backendId = r._id || r.id;
    if(backendId){
      fetch(`${API_URL}/api/rentals/${encodeURIComponent(backendId)}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: "Cancelled", cancelledAt: new Date().toISOString(), cancelledBy: "Customer" }) }).catch(()=>{});
    }
    
    localStorage.setItem("fitrent_admin_alert",JSON.stringify({type:"rental_cancelled",order:r.order||"—",name:r.name||"Equipment",time:Date.now()}));
    sendCancelEmail({
  customer_name: r.customerName || "Customer",
  phone: r.customerPhone || "Not Available",
  product: r.name,
  order: r.order || "N/A"
});
    setSelectedRental(null);
  };

  return <main className="page rentals-page"><div className="profile-layout">
    <aside className="profile-side">
      <div className="profile-mini"><div>{user?.name?.[0]?.toUpperCase()||"U"}</div><b>{user?.name||"Member"}</b><span>{user?.email||"member@fitrent.in"}</span></div>
      <button className="active"><Icon name="user" size={15}/> My Rentals</button>
      <button onClick={()=>setPage("shop")}>Browse Equipment</button>
      <button onClick={onLogout}><Icon name="logout" size={16}/> Logout</button>
    </aside>

    <section className="rentals-main">
      <div className="page-title rentals-page-title"><div><span className="section-kicker">ACCOUNT</span><h1>My Rentals</h1><p>Manage your equipment rentals and delivery details.</p></div><button className="green-btn compact" onClick={()=>setPage("shop")}>Rent Equipment <Icon name="arrow" size={16}/></button></div>

      {rentals.filter(r=>r.status!=="Cancelled").length===0 ? <div className="empty rentals-empty"><div>🏋️</div><h2>No rentals yet</h2><p>Your active and completed rentals will appear here.</p><button className="dark-btn" onClick={()=>setPage("shop")}>Browse Equipment</button></div> :
      <div className="rental-list">{rentals.filter(r=>r.status!=="Cancelled").map((r,idx)=><div className="rental-card" key={r.id||idx}>
        <img src={r.image} alt={r.name}/>
        <div><span className={`status ${r.status==='Cancelled'?'cancelled':''}`}>{r.status||"Active"}</span><h3>{r.name}</h3><p>{money(r.rentalPrice||r.price)} · {r.duration||r.rentalMonths||3} month rental · Qty {r.qty||1}</p><small>Order #{r.order||"—"}</small></div>
        <div className="rental-card-actions"><button className="outline-btn" onClick={()=>setSelectedRental(r)}>View Details</button>{r.status!=='Cancelled'&&<button className="cancel-inline-btn" onClick={()=>cancelRental(r)}>Cancel Rental</button>}</div>
      </div>)}</div>}
    </section>
  </div>{selectedRental&&<RentalDetailsModal r={selectedRental} onClose={()=>setSelectedRental(null)} onCancel={cancelRental}/>}</main>;
}

function How() {
  const steps = [
    ["01", "Choose", "Pick the equipment you need from our collection."],
    ["02", "Select Duration", "Choose a rental period that works for you."],
    ["03", "Checkout", "Enter your address and pay COD"],
    ["04", "Train", "We deliver. You train. Return when your rental ends."]
  ];
  return <main className="page simple-page how-simple">
    <div className="center-title">
      <span className="section-kicker">HOW IT WORKS</span>
      <h1>How It <span>Works</span></h1>
      <p>Get quality gym equipment at your doorstep in four easy steps.</p>
    </div>
    <div className="how-simple-timeline">
      {steps.map(([no, title, text]) => (
        <div className="how-simple-step" key={no}>
          <span className="how-simple-no">{no}</span>
          <div>
            <span className="how-simple-label">STEP {no}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  </main>;
}

function About(){
  const promises = [
    ["✦", "Clean Equipment", "Well-maintained equipment ready for your workout."],
    ["◇", "Transparent Pricing", "Clear daily pricing with no hidden surprises."],
    ["↻", "Flexible Rentals", "Choose a rental period that works for you."],
    ["✓", "Easy Checkout", "Simple booking from selection to delivery."]
  ];

  return (
    <main className="page simple-page about">
      <div className="center-title">
        <span className="section-kicker">ABOUT FITRENT</span>
        <h1>Train at home.<br/><span>Rent smart.</span></h1>
        <p>
          FitRent makes premium fitness equipment accessible without the cost
          and commitment of ownership.
        </p>
      </div>

      <div className="about-box">
        <h2>Our <span>promise</span></h2>

        <p className="promise-intro">
          Clean equipment, transparent daily pricing, flexible rental periods
          and a simple checkout—everything designed around your workout.
        </p>

        <div className="promise-grid">
          {promises.map(([icon, title, text]) => (
            <div className="promise-card" key={title}>
              <div className="promise-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


function Contact(){
  const rows = [
    ["phone", "PHONE", "9871482091", null],
    ["pin", "ADDRESS", "Gargs Importers and Traders LLP,Style Plaza, Jharsa Road, Sector-15, Part-1, Gurgaon (Haryana) -122001,India", null],
    ["globe", "WEBSITE", "https://inhousegym.in/", null],
    ["mail", "EMAIL", "inhousegym@gmail.com", "mailto:support@inhousegym.com"]
  ];
  return <main className="contact-page">
    <section className="contact-main">
      <div className="contact-content">
        <div className="contact-brand">INHOUSEGYM</div>
        <h1>Contact <span>Us</span></h1>
        <div className="contact-list">
          {rows.map(([icon,title,value,href]) => <div className="contact-row" key={title}>
            <div className="contact-icon"><Icon name={icon} size={21}/></div>
            <div><h3>{title}</h3>{href?<a href={href}>{value}</a>:<p>{value}</p>}</div>
          </div>)}
        </div>
      </div>
    </section>
    <aside className="contact-collage" aria-label="InHouseGym equipment gallery">
      <div className="contact-shot"><img src="/assets/t-590.png" alt="Treadmill equipment"/></div>
      <div className="contact-shot"><img src="/assets/ct-504.png" alt="Cross trainer equipment"/></div>
      <div className="contact-shot"><img src="/assets/spin-bike-c22.jpg" alt="Exercise bike equipment"/></div>
    </aside>
  </main>;
}


function AdminLoginPage({onLogin,onBack}) {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [error,setError]=useState("");
  const submit=e=>{
    e.preventDefault();
    if(email.trim().toLowerCase()===ADMIN_EMAIL && pass===ADMIN_PASSWORD){
      onLogin({name:"Admin",email:ADMIN_EMAIL,role:"admin"});
    } else setError("Invalid admin email or password.");
  };
  return (
  <main className="admin4-login-page">
    <div className="admin4-login-shell">
      <button className="admin4-back-site" onClick={onBack}>
        ← Back to website
      </button>

      <div className="admin4-login-card">
        <div className="admin4-login-logo">
          <Logo />
        </div>

        <span className="admin4-eyebrow">ADMINISTRATION</span>

        <h1>Admin Portal</h1>

        <p>
          Sign in to manage your InHouseGym equipment, rentals and customers.
        </p>

        <form onSubmit={submit} autoComplete="off">
          <label>
            Admin Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter password"
              autoComplete="new-password"
              required
            />
          </label>

          {error && (
            <div className="admin4-login-error">{error}</div>
          )}

          <button className="admin4-login-submit" type="submit">
            Sign in to Admin Dashboard <Icon name="arrow" size={16} />
          </button>
        </form>
      </div>
    </div>
  </main>
);}
function openDocument(dataUrl){
  if(!dataUrl) return;
  if(!dataUrl.startsWith("data:")){
    window.open(dataUrl,"_blank","noopener,noreferrer");
    return;
  }
  try{
    const comma = dataUrl.indexOf(",");
    const header = dataUrl.slice(0,comma);
    const base64 = dataUrl.slice(comma+1);
    const mime = (header.match(/data:(.*?);/)||[])[1] || "application/octet-stream";
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
    const blob = new Blob([bytes],{type:mime});
    const url = URL.createObjectURL(blob);
    window.open(url,"_blank","noopener,noreferrer");
    setTimeout(()=>URL.revokeObjectURL(url),60000);
  }catch(e){
    window.open(dataUrl,"_blank","noopener,noreferrer");
  }
}

function AdminDashboard({
  products,
  onSaveProducts,
  onDeleteProduct,
  onLogout,
  offer,
  setOffer
}) {
  const [section,setSection]=useState("dashboard");
  const [editing,setEditing]=useState(null);
  const [,refreshAdminData]=useState(0);
 const emptyForm={
  name:"",
  category:"Treadmills",

  price:"",
  price3Month:"",
  price6Month:"",

  maxWeight:"",
  treadmillTier:"premium",
  rating:"4.7",
  reviews:"0",
  meta:"",
  image:"",
  description:"",
  popular:false,
  enabled:true
};
  const [form,setForm]=useState(emptyForm);
  const [serverRentals,setServerRentals]=useState(null);
  const [serverUsers,setServerUsers]=useState(null);
  // Admin dashboard backend se data lata hai, isliye kisi bhi device par admin ko sab dikhta hai.
  // Pehli baar: laptop ke purane local data ko backend par migrate bhi kar deta hai, taaki purana data gayab na ho.
  useEffect(()=>{
    let cancelled=false;
    (async()=>{
      const localRentals=getStorage("fitrent_rentals",[]);
      const localUsers=getStorage("fitrent_users",[]);
      const backendRentals=await getBackendJSON(`${API_URL}/api/rentals`, true);
      const backendUsers=await getBackendJSON(`${API_URL}/api/users`, true);
      if(cancelled) return;
      let finalRentals = Array.isArray(backendRentals) ? backendRentals : null;
      let finalUsers = Array.isArray(backendUsers) ? backendUsers : null;
      if(Array.isArray(backendRentals)){
        const missingRentals=localRentals.filter(lr=>!backendRentals.some(sr=>(sr.id && lr.id && String(sr.id)===String(lr.id)) || (sr.order && lr.order && sr.order===lr.order && sr.name===lr.name)));
        if(missingRentals.length){
          await callApi("POST", `${API_URL}/api/rentals/migrate`, missingRentals, true);
          finalRentals=[...backendRentals, ...missingRentals];
        }
      }
      if(Array.isArray(backendUsers)){
        const missingUsers=localUsers.filter(lu=>!backendUsers.some(su=>(su.email||"").toLowerCase()===(lu.email||"").toLowerCase()));
        if(missingUsers.length){
          await callApi("POST", `${API_URL}/api/users/migrate`, missingUsers, true);
          finalUsers=[...backendUsers, ...missingUsers.map(stripPassword)];
        }
      }
      if(finalRentals) setServerRentals(finalRentals);
      if(finalUsers){
        setServerUsers(finalUsers);
        const mergedLocalUsers=finalUsers.map(fu=>{ const lu=localUsers.find(x=>(x.email||"").toLowerCase()===(fu.email||"").toLowerCase()); return lu ? {...fu, password:lu.password} : fu; });
        localStorage.setItem("fitrent_users", JSON.stringify(mergedLocalUsers));
        if(finalRentals) localStorage.setItem("fitrent_rentals", JSON.stringify(finalRentals));
      } else if(finalRentals){
        localStorage.setItem("fitrent_rentals", JSON.stringify(finalRentals));
      }
    })();
    return ()=>{cancelled=true};
  },[]);
  const rentals=serverRentals ?? getStorage("fitrent_rentals",[]);
  const users=serverUsers ?? getStorage("fitrent_users",[]);
  const cancelledRentals=rentals.filter(r=>r.status==="Cancelled");
  const latestAdminAlert=getStorage("fitrent_admin_alert",null);
  const treadmillCount=products.filter(p=>p.category==="Treadmills").length;
  const crossCount=products.filter(p=>p.category==="Cross Trainers").length;
  const bikeCount=products.filter(p=>p.category==="Exercise Bikes").length;
  const reset=()=>{setEditing(null);setForm(emptyForm)};
  // Sequence: equipment ko usi category me upar/neeche karo —
  // shop page par wahi order dikhega jo yahan set karogi.
  const moveProduct=(p,dir)=>{
    const sameCat=products.filter(x=>x.category===p.category);
    const idx=sameCat.findIndex(x=>x.id===p.id);
    const swapWith=sameCat[idx+dir];
    if(!swapWith) return;
    const a=products.findIndex(x=>x.id===p.id);
    const b=products.findIndex(x=>x.id===swapWith.id);
    const updated=[...products];
    [updated[a],updated[b]]=[updated[b],updated[a]];
    onSaveProducts(updated);
  };
  const isFirstInCategory=p=>products.find(x=>x.category===p.category)?.id===p.id;
  const isLastInCategory=p=>[...products].reverse().find(x=>x.category===p.category)?.id===p.id;
  const edit=p=>{
  setEditing(p.id);

setForm({
  ...p,
  maxWeight:p.maxWeight ?? "",
  treadmillTier:p.treadmillTier ?? p.weightTier ?? "premium",
  price:p.price ?? "",
  price3Month:p.price3Month ?? "",
  price6Month:p.price6Month ?? "",
  rating:p.rating ?? "4.7",
  reviews:p.reviews ?? "0",
  popular:p.popular ?? false,
  enabled:p.enabled !== false
});

  setSection("add");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};
  const submit=e=>{e.preventDefault(); if(!form.name.trim()||!form.price||!form.image.trim()) return;
    const item={
  ...form,

  id:editing || (
    `${form.category.toLowerCase().replace(/\s+/g,"-")}-${Date.now()}`
  ),

  price:Number(form.price),
  price3Month:Number(form.price3Month) || 0,

  price6Month:Number(form.price6Month) || 0,

  rating:Number(form.rating) || 0,
  reviews:Number(form.reviews) || 0,

 maxWeight:
  form.category === "Treadmills"
    ? (Number(form.maxWeight) || 0)
    : undefined,

treadmillTier:
  form.category === "Treadmills"
    ? form.treadmillTier
    : undefined,

popular:Boolean(form.popular),
enabled:form.enabled !== false
};
    onSaveProducts(editing?products.map(x=>x.id===editing?item:x):[...products,item]); reset(); setSection("products");
  };
  const remove = (id) => {
  const product = products.find(p => p.id === id);

  if (!product) return;

  const confirmed = window.confirm(
    `Delete "${product.name}" from the website?`
  );

  if (!confirmed) return;

  onDeleteProduct(id);
};
  const removeRental = async (index) => {
  const rental = rentals[index];
  if (!rental) return;

  const confirmed = window.confirm(
    `Remove Order #${rental.order || "—"} from the admin dashboard?`
  );

  if (!confirmed) return;

  const backendId = rental._id || rental.id;
  if (backendId) {
    await callApi("DELETE", `${API_URL}/api/rentals/${encodeURIComponent(backendId)}`, undefined, true);
  }
  const currentRentals = getStorage("fitrent_rentals", []);
  const updatedLocal = currentRentals.filter(x=>!((x._id && rental._id && String(x._id)===String(rental._id)) || (x.id && rental.id && String(x.id)===String(rental.id)) || (x.order===rental.order && x.name===rental.name)));
  localStorage.setItem("fitrent_rentals", JSON.stringify(updatedLocal));
  if (serverRentals) setServerRentals(serverRentals.filter((_, i) => i !== index));
  refreshAdminData(v => v + 1);
};

  const removeUser = async (index) => {
  const user = users[index];
  if (!user) return;

  const confirmed = window.confirm(
    `Delete ${user.name || "this user"} from registered users?`
  );

  if (!confirmed) return;

  const backendId = user._id || user.email;
  if (backendId) {
    await callApi("DELETE", `${API_URL}/api/users/${encodeURIComponent(backendId)}`, undefined, true);
  }
  const currentUsers = getStorage("fitrent_users", []);
  localStorage.setItem("fitrent_users", JSON.stringify(currentUsers.filter(x=>(x.email||"").toLowerCase()!==(user.email||"").toLowerCase())));
  if (serverUsers) setServerUsers(serverUsers.filter((_, i) => i !== index));
  refreshAdminData(v => v + 1);
};
  const update=(k,v)=>setForm(f=>({...f,[k]:v}));
  const nav=[
    ["dashboard","Dashboard","⌂"],["products","Products","▦"],["add","Add Equipment","＋"],["orders","Orders / Rentals","▤"],["users","Users","♙"],["offers","Festive Offers","🎁"]
  ];
  const title=section==="dashboard"?"Dashboard":section==="products"?"Products":section==="add"?(editing?"Edit Equipment":"Add New Equipment"):section==="orders"?"Orders & Rentals":"Users";
  return <main className="admin4-app">
    <aside className="admin4-sidebar">
      <div className="admin4-brand"><Logo/><div>ADMINISTRATION</div></div>
      <div className="admin4-menu-label">MAIN MENU</div>
      <nav className="admin4-nav">{nav.map(([id,label,ic])=><button key={id} className={section===id?"active":""} onClick={()=>{setSection(id);if(id!=="add")reset()}}><span className="admin4-nav-icon">{ic}</span><span>{label}</span>{id==="products"&&<b>{products.length}</b>}</button>)}</nav>
      <div className="admin4-side-bottom"><div className="admin4-profile"><div className="admin4-avatar">A</div><div><strong>Administrator</strong><small>admin@inhousegym.com</small></div></div><button className="admin4-logout" onClick={onLogout}><Icon name="logout" size={16}/> Logout</button></div>
    </aside>

    <section className="admin4-main">
      <header className="admin4-header"><div><span className="admin4-eyebrow">INHOUSEGYM ADMIN</span><h1>{title}</h1><p>{section==="dashboard"?"Manage your equipment, rentals and customer activity.":section==="products"?"View, edit or remove equipment from your store.":section==="add"?(editing?"Update the equipment details below.":"Fill in the details to add new equipment to your store."):section==="orders"?"Keep track of customer rental activity.":"View registered customer accounts."}</p></div><div className="admin4-header-user"><span className="admin4-status-dot"/> <span>Admin</span></div></header>

      {section==="dashboard"&&<>
        <div className="admin4-stats">
          {[['Total Equipment',products.length,'All catalog items'],['Treadmills',treadmillCount,'Weight capacity tracked'],['Cross Trainers',crossCount,'Available equipment'],['Exercise Bikes',bikeCount,'Available equipment']].map(([t,n,s])=><div className="admin4-stat" key={t}><span>{t}</span><strong>{n}</strong><small>{s}</small></div>)}
        </div>
        <div className="admin4-dashboard-grid">
          <section className="admin4-card"><div className="admin4-card-head"><div><span className="admin4-label">STORE CATALOG</span><h2>Equipment Overview</h2></div><button
  className="admin4-view-products"
  onClick={()=>setSection("products")}
>
  View Products →
</button></div>
            <div className="admin4-category-list">{[['Treadmills',treadmillCount],['Cross Trainers',crossCount],['Exercise Bikes',bikeCount]].map(([name,count])=><div className="admin4-category-row" key={name}><div className="admin4-cat-icon">{name==='Treadmills'?'T':name==='Cross Trainers'?'C':'B'}</div><div><strong>{name}</strong><small>{count} equipment</small></div><span>{products.length?Math.round(count/products.length*100):0}%</span></div>)}</div>
          </section>

        </div>
        <section className="admin4-card"><div className="admin4-card-head"><div><span className="admin4-label">LATEST PRODUCTS</span><h2>Equipment in your store</h2></div><button
  className="admin4-view-all"
  onClick={()=>setSection("products")}
>
  View All →
</button></div><div className="admin4-products-grid">{products.slice(0,6).map(p=><div className="admin4-product-mini" key={p.id}><img src={p.image} alt=""/><div><strong>{p.name}</strong><small>{p.category}</small><span>{money(p.price)} / day</span></div><button onClick={()=>edit(p)}>Edit</button></div>)}</div></section>
      </>}

      {section==="products"&&<section className="admin4-card admin4-products-page"><div className="admin4-card-head"><div><span className="admin4-label">PRODUCT MANAGEMENT</span><h2>All Equipment</h2></div><button className="admin4-primary" onClick={()=>{reset();setSection("add")}}>＋ Add Equipment</button></div><div className="admin4-table">{products.map(p=><div className="admin4-table-row" key={p.id}><div className="admin4-table-product">
  <img src={p.image} alt=""/>
  <div>
    <strong>{p.name}</strong>
    <small>{p.meta}</small>

    {p.popular && (
      <small
        style={{
          color:"#ed1c24",
          fontWeight:"700",
          marginTop:"4px"
        }}
      >
        ⭐ Popular on Home
      </small>
    )}
  </div>
</div><span>{p.category}</span><span>{money(p.price)} / day</span><span>{p.category==="Treadmills"?`${p.maxWeight} kg`:"—"}</span><span>★ {p.rating}</span><div className="admin4-actions">
  <div className="equipment-status">

  <label
    className="equipment-switch"
    title={p.enabled !== false ? "Disable for users" : "Enable for users"}
  >
    <input
      type="checkbox"
      checked={p.enabled !== false}
      onChange={() => {
        const updated = products.map(x =>
          x.id === p.id
            ? { ...x, enabled: x.enabled === false }
            : x
        );

        onSaveProducts(updated);
      }}
    />
    <span className="switch-slider"></span>
  </label>

  <span className={p.enabled !== false ? "status-enabled" : "status-disabled"}>
    {p.enabled !== false ? "Enabled" : "Disabled"}
  </span>

</div>
  <span className="admin4-seq">
    <button type="button" title="Move Up" disabled={isFirstInCategory(p)} onClick={()=>moveProduct(p,-1)}>↑</button>
    <button type="button" title="Move Down" disabled={isLastInCategory(p)} onClick={()=>moveProduct(p,1)}>↓</button>
  </span>
  <button onClick={()=>edit(p)}>Edit</button>
  <button className="danger" onClick={()=>remove(p.id)}>Delete</button>
</div></div>)}</div></section>}

      {section==="add"&&<section className="admin4-form-card"><div className="admin4-form-top"><div><span className="admin4-label">PRODUCT MANAGEMENT</span><h2>{editing?"Edit Equipment":"Add New Equipment"}</h2><p>{editing?"Update the equipment details below. Changes will appear on the customer website.":"Fill in the details to add a new equipment to your store."}</p></div><button className="admin4-close-form" onClick={()=>{reset();setSection("products")}}>×</button></div><form onSubmit={submit} className="admin4-form-layout"><div className="admin4-form-fields"><div className="admin4-field-grid"><label>Product Name<input value={form.name} onChange={e=>update("name",e.target.value)} placeholder="Enter product name" required/></label><label>Category<select value={form.category} onChange={e=>update("category",e.target.value)}><option>Treadmills</option><option>Cross Trainers</option><option>Exercise Bikes</option></select></label><label>
  Price per Day (₹)
  <input
    type="number"
    min="0"
    value={form.price}
    onChange={e=>update("price",e.target.value)}
    placeholder="Enter daily price"
    required
  />
</label>

<label>
  3 Months Price (₹)
  <input
    type="number"
    min="0"
    value={form.price3Month}
    onChange={e=>update("price3Month",e.target.value)}
    placeholder="Enter 3 month price"
    required
  />
</label>

<label>
  6 Months Price (₹)
  <input
    type="number"
    min="0"
    value={form.price6Month}
    onChange={e=>update("price6Month",e.target.value)}
    placeholder="Enter 6 month price"
    required
  />
</label><label>Max User Weight (kg)<input type="number" min="0" value={form.maxWeight} onChange={e=>update("maxWeight",e.target.value)} placeholder="e.g. 100"/></label>{form.category === "Treadmills" && (
  <label>
    Treadmill Category
    <select
      value={form.treadmillTier}
      onChange={e=>update("treadmillTier",e.target.value)}
    >
     <option value="premium">Standard Load — Up to 110 kg</option>
<option value="gold">High Load — Up to 135 kg</option>
<option value="elite">Max Load — Above 135 kg</option>
    </select>
  </label>
)}<label>Rating (out of 5)<input type="number" min="0" max="5" step="0.1" value={form.rating} onChange={e=>update("rating",e.target.value)} placeholder="4.7"/></label><label>Reviews<input type="number" min="0" value={form.reviews} onChange={e=>update("reviews",e.target.value)} placeholder="0"/></label><label className="wide">Short Info<input value={form.meta} onChange={e=>update("meta",e.target.value)} placeholder="Motorized | Premium"/></label><label className="wide">Image URL<input value={form.image} onChange={e=>update("image",e.target.value)} placeholder="https://..." required/></label>
      <label className="wide admin4-checkbox">
  <input
    type="checkbox"
    checked={form.popular === true}
    onChange={e=>update("popular",e.target.checked)}
  />
  <span>⭐ Show this equipment in Popular Equipment on Home Page</span>
</label>
<label className="wide admin4-checkbox">
  <input
    type="checkbox"
    checked={form.enabled !== false}
    onChange={e=>update("enabled",e.target.checked)}
  />
  <span>Show this equipment to users</span>
</label>
<label className="wide">Description<textarea value={form.description} onChange={e=>update("description",e.target.value)} placeholder="Enter product description"/></label></div><div className="admin4-form-actions"><button type="button" className="admin4-cancel" onClick={()=>{reset();setSection("products")}}>Cancel</button><button type="submit" className="admin4-primary">{editing?"Save Changes":"Add Equipment"}</button></div></div><aside className="admin4-preview"><span className="admin4-label">IMAGE PREVIEW</span>{form.image?<img src={form.image} alt="Preview"/>:<div className="admin4-placeholder"><span>＋</span><b>No image selected</b><small>Paste an image URL to preview</small></div>}<div className="admin4-preview-copy"><strong>{form.name||"Product Name"}</strong><span>{form.category} · {form.price?money(Number(form.price)):"₹0"} / day</span>{form.category==="Treadmills"&&form.maxWeight&&<small>Max user weight: {form.maxWeight} kg</small>}</div></aside></form></section>}

      {section==="orders"&&<section className="admin4-card"><div className="admin4-card-head"><div><span className="admin4-label">RENTALS</span><h2>Orders & Rentals</h2></div>{cancelledRentals.length>0&&<span className="admin-cancel-count">{cancelledRentals.length} cancelled</span>}</div>{cancelledRentals.length>0&&<div className="admin-cancel-alert"><strong>Rental cancellation received</strong><span>{cancelledRentals.length} customer rental{cancelledRentals.length>1?"s have":" has"} been cancelled.</span>{latestAdminAlert?.order&&<small>Latest: Order #{latestAdminAlert.order}</small>}</div>}{rentals.length===0?<div className="admin4-empty"><b>No rental records yet</b><span>Customer orders will appear here after checkout.</span></div>:<div className="admin4-table admin-orders-table">{rentals.map((r,i)=><div className={`admin4-table-row admin-order-row ${r.status==='Cancelled'?'admin-cancelled-row':''}`} key={i}><div className="admin4-table-product"><img src={r.image} alt=""/><div><strong>{r.name}</strong><small>Order #{r.order||'—'}</small></div></div><div className="admin-customer-info"><strong>{r.customerName||"Customer"}</strong><small>{r.customerPhone||"Phone not available"}</small><small>{r.customerAddress||"Address not available"}</small><small>{r.customerCity||""} {r.customerPin||""}</small></div><div className="admin-customer-docs">
  <small>Aadhaar: {r.customerAadhaar||"—"}</small>
  {r.customerAadhaarFile?<button type="button" className="admin-doc-btn" onClick={()=>openDocument(r.customerAadhaarFile)}
>View Aadhaar</button>:<small>No file</small>}
  <small>PAN: {r.customerPan||"—"}</small>
  {r.customerPanFile?<button type="button" className="admin-doc-btn" onClick={()=>openDocument(r.customerPanFile)}
>View PAN</button>:<small>No file</small>}
</div><span>{r.duration} month</span><span className={r.status==='Cancelled'?"admin4-cancelled":"admin4-active"}>{r.status||"Active"}</span><span>{money(r.rentalPrice||r.price)}</span><button className="admin-delete-record" onClick={()=>removeRental(i)}>Delete</button></div>)}</div>}</section>}

      {section==="users"&&<section className="admin4-card"><div className="admin4-card-head"><div><span className="admin4-label">CUSTOMERS</span><h2>Registered Users</h2></div></div>{users.length===0?<div className="admin4-empty"><b>No registered users yet</b><span>Users will appear here when they create an account.</span></div>:<div className="admin4-user-list">{users.map((u,i)=><div className="admin4-user-row" key={i}><div className="admin4-avatar">{(u.name||'U')[0].toUpperCase()}</div><div><strong>{u.name||"Member"}</strong><small>{u.email}</small></div><div className="admin-user-docs">{u.customerAadhaarFile?<button type="button" className="admin-doc-btn" onClick={()=>openDocument(u.customerAadhaarFile)}
>View Aadhaar</button>:null}{u.customerPanFile?<button type="button" className="admin-doc-btn" onClick={()=>openDocument(u.customerPanFile)}
>View PAN</button>:null}</div><span>Customer</span><button className="admin-delete-record" onClick={()=>removeUser(i)}>Delete</button></div>)}</div>}</section>}
      {section==="offers" &&
<section className="admin4-form-card">

  <div className="admin4-form-top">
    <div>
      <span className="admin4-label">MARKETING</span>
      <h2>Festive Offer</h2>
      <p>Apply a discount across your store.</p>
    </div>
  </div>

  <div className="admin4-field-grid">

    <label>
      Offer Title
      <input
        value={offer.title}
        onChange={e=>setOffer({...offer,title:e.target.value})}
        placeholder="Diwali Sale"
      />
    </label>
    <label>
  Category
  <select
    value={offer.category}
    onChange={e=>setOffer({...offer,category:e.target.value})}
  >
    <option>All Equipment</option>
    <option>Treadmills</option>
    <option>Cross Trainers</option>
    <option>Exercise Bikes</option>
  </select>
</label>

    <label>
      Discount (%)
      <input
        type="number"
        value={offer.discount}
        onChange={e=>setOffer({...offer,discount:Number(e.target.value)})}
      />
    </label>

    <label className="wide admin4-checkbox">
      <input
        type="checkbox"
        checked={offer.enabled}
        onChange={e=>setOffer({...offer,enabled:e.target.checked})}
      />
      <span>Enable Offer</span>
    </label>

  </div>

  <div className="admin4-preview-offer">
    <h3>{offer.title || "Offer Preview"}</h3>
    <p>
  {offer.discount}% OFF on {offer.category}
</p>
  </div>

</section>}
      
    </section>
    
  </main>;
}
function ForgotPassword({onClose,onBackToLogin}) {

  const [step,setStep] = useState(1);

  const [email,setEmail] = useState("");
  const [otp,setOtp] = useState("");

  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [showNewPassword,setShowNewPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);

  const [error,setError] = useState("");
  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState(false);


  const handleSendOTP = async (e) => {

    e.preventDefault();

    setError("");
    setMessage("");

    const cleanEmail =
      email.trim().toLowerCase();

    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    const backendUsers = await getBackendJSON(`${API_URL}/api/users`, true);
    const localUsersForReset = getStorage("fitrent_users", []);
    const users = Array.isArray(backendUsers)
      ? [...backendUsers, ...localUsersForReset.filter(lu=>!backendUsers.some(bu=>(bu.email||"").toLowerCase()===(lu.email||"").toLowerCase()))]
      : localUsersForReset;

    const user =
      users.find(
        u =>
          (u.email || "").toLowerCase()
          === cleanEmail
      );

    if (!user) {
      setError(
        "No account found with this email address."
      );
      return;
    }

    setLoading(true);

    try {

      await sendPasswordResetOTP(
        cleanEmail,
        user.name
      );

      setStep(2);

      setMessage(
        "OTP sent successfully. Please check your email."
      );
    } catch (error) {

      console.error(error);

      setError(
        "Unable to send OTP. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  const handleVerifyOTP = (e) => {

    e.preventDefault();

    setError("");

    const data =
      getStorage(
        "fitrent_password_reset",
        null
      );

    if (!data) {

      setError(
        "OTP expired. Please request a new OTP."
      );

      return;
    }

    if (Date.now() > data.expiresAt) {

      localStorage.removeItem(
        "fitrent_password_reset"
      );

      setError(
        "OTP expired. Please request a new OTP."
      );

      return;
    }

    if (otp.trim() !== data.otp) {

      setError("Incorrect OTP.");

      return;
    }

    setStep(3);
  };


  const handleResetPassword = async (e) => {

    e.preventDefault();

    setError("");

    if (newPassword.length < 6) {

      setError(
        "Password must be at least 6 characters."
      );

      return;
    }

    if (newPassword !== confirmPassword) {

      setError(
        "Passwords do not match."
      );

      return;
    }

    const data =
      getStorage(
        "fitrent_password_reset",
        null
      );

    if (!data) {

      setError(
        "Reset session expired. Please start again."
      );

      return;
    }

    const users =
      getStorage(
        "fitrent_users",
        []
      );

    const updatedUsers =
      users.map(user =>
        user.email.toLowerCase()
        === data.email
          ? {
              ...user,
              password:newPassword
            }
          : user
      );

    localStorage.setItem(
      "fitrent_users",
      JSON.stringify(updatedUsers)
    );

    // Backend par bhi password update karo, taaki naye password se kisi bhi device par login ho sake.
    await callApi("POST", `${API_URL}/api/auth/reset-password`, { email: data.email, newPassword }, false);

    localStorage.removeItem(
      "fitrent_password_reset"
    );

    setStep(4);
  };


  return (
    <div className="modal-backdrop">

      <div className="auth-card">

        <button
          className="modal-close"
          onClick={onClose}
        >
          <Icon name="close"/>
        </button>

        <Logo/>


        {step === 1 && (

          <>
            <span className="section-kicker">
              PASSWORD RESET
            </span>

            <h2>
              Forgot your password?
            </h2>

            <p>
              Enter your registered email
              address and we'll send you
              a verification code.
            </p>


            <form onSubmit={handleSendOTP}>

              <label>
                Email Address

                <input
                  type="email"
                  value={email}
                  onChange={
                    e => setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  required
                />
              </label>


              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}


              <button
                className="dark-btn full"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Send OTP"
                }

                <Icon
                  name="arrow"
                  size={16}
                />
              </button>

            </form>
          </>
        )}


        {step === 2 && (

          <>
            <span className="section-kicker">
              VERIFY OTP
            </span>

            <h2>
              Enter your OTP
            </h2>

            <p>
              We sent a 6-digit OTP to
              <br/>
              <b>{email}</b>
            </p>


            <form onSubmit={handleVerifyOTP}>

              <label>
                OTP

                <input
                  type="text"
                  value={otp}
                  onChange={
                    e => setOtp(e.target.value)
                  }
                  maxLength="6"
                  placeholder="Enter 6-digit OTP"
                  required
                />
              </label>


              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}


              {message && (
                <div className="auth-success">
                  {message}
                  <div className="otp-note">
                    Note: If you don't see the OTP in your inbox, please check your <strong>Spam/Junk folder.</strong>
                  </div>
                </div>
              )}


              <button
                className="dark-btn full"
                type="submit"
              >
                Verify OTP

                <Icon
                  name="arrow"
                  size={16}
                />
              </button>

            </form>
          </>
        )}


        {step === 3 && (

          <>
            <span className="section-kicker">
              NEW PASSWORD
            </span>

            <h2>
              Create new password
            </h2>


            <form
              onSubmit={handleResetPassword}
            >

              <label>
                New Password

                <div className="password-field">

                  <input
                    type={
                      showNewPassword
                        ? "text"
                        : "password"
                    }
                    value={newPassword}
                    onChange={
                      e =>
                        setNewPassword(
                          e.target.value
                        )
                    }
                    placeholder="Enter new password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowNewPassword(
                        !showNewPassword
                      )
                    }
                  >
                    👁
                  </button>

                </div>

              </label>


              <label>
                Confirm Password

                <div className="password-field">

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={confirmPassword}
                    onChange={
                      e =>
                        setConfirmPassword(
                          e.target.value
                        )
                    }
                    placeholder="Confirm new password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    👁
                  </button>

                </div>

              </label>


              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}


              <button
                className="dark-btn full"
                type="submit"
              >
                Reset Password

                <Icon
                  name="arrow"
                  size={16}
                />
              </button>

            </form>
          </>
        )}


        {step === 4 && (

          <>
            <span className="section-kicker">
              SUCCESS
            </span>

            <h2>
              Password reset successfully
            </h2>

            <p>
              Your password has been updated.
              You can now login with your
              new password.
            </p>


            <button
              className="dark-btn full"
              onClick={onBackToLogin}
            >
              Back to Login

              <Icon
                name="arrow"
                size={16}
              />
            </button>

          </>
        )}

      </div>

    </div>
  );
}


function AdminAuth({onClose,onLogin}) {
  const [email,setEmail]=useState(""),[pass,setPass]=useState(""),[error,setError]=useState("");
  const submit=e=>{e.preventDefault(); if(email.trim().toLowerCase()===ADMIN_EMAIL&&pass===ADMIN_PASSWORD){onLogin({name:"Admin",email:ADMIN_EMAIL,role:"admin"});}else setError("Invalid admin email or password.")};
  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className="auth-card admin-login-card"><button className="modal-close" onClick={onClose}><Icon name="close"/></button><Logo/><span className="section-kicker">ADMIN ACCESS</span><h2>Admin Login</h2><p className="admin-login-note">Use the admin account to manage equipment on this demo website.</p><form onSubmit={submit} autoComplete="off"><label>Admin Email<input type="email" name="admin-login-email" value={email} onChange={e=>setEmail(e.target.value)} onFocus={e=>e.currentTarget.removeAttribute("readonly")} autoComplete="off" readOnly required/></label><label>Password<input type="password" name="admin-login-password" value={pass} onChange={e=>setPass(e.target.value)} onFocus={e=>e.currentTarget.removeAttribute("readonly")} placeholder="Enter admin password" autoComplete="new-password" readOnly required/></label>{error&&<div className="admin-error">{error}</div>}<button className="dark-btn full" type="submit">Open Admin Dashboard <Icon name="arrow" size={16}/></button></form><div className="demo-note">Demo admin: admin@inhousegym.com · Password: admin123</div></div></div>;
}

function App(){
  const [page,setPage]=useState(()=> window.location.pathname==="/admin" ? "admin" : window.location.pathname==="/admin-login" ? "admin-login" : "home"),[shopCategory,setShopCategory]=useState("All Equipment"),[user,setUser]=useState(()=>{const saved=getStorage("fitrent_user",null); const accounts=getStorage("fitrent_users",[]); return saved && accounts.some(a=>(a.email||"").toLowerCase()===(saved.email||"").toLowerCase()) ? saved : null;}),[admin,setAdmin]=useState(()=>getStorage(ADMIN_STORAGE_KEY,null)),[cart,setCart]=useState(()=>getStorage("fitrent_cart",[])),[checkoutItems,setCheckoutItems]=useState([]),[auth,setAuth]=useState(null),[authPurpose,setAuthPurpose]=useState(null),[pendingRent,setPendingRent]=useState(null),[showCart,setShowCart]=useState(false),[checkout,setCheckout]=useState(false),[selected,setSelected]=useState(null),[catalog,setCatalog]=useState(() => {
  const stored = getStorage(PRODUCT_STORAGE_KEY, null);
  const storedProducts = Array.isArray(stored) ? stored : [];
  const deletedIds = new Set(getStorage(DELETED_PRODUCT_STORAGE_KEY, []));
  const storedIds = new Set(storedProducts.map(p => p.id));

  // Keep saved admin changes, add newly shipped default products,
  // but never bring back equipment that the admin deleted.
  const merged = [
    ...storedProducts,
    ...products.filter(p => !storedIds.has(p.id) && !deletedIds.has(p.id))
  ];

  return merged.map(p => ({
    ...p,
    popular: p.popular ?? false,
    enabled: p.enabled ?? true
  }));
});
const deleteProduct = (id) => {
  // Remember the deletion so a default product cannot return after refresh.
  const deletedIds = getStorage(DELETED_PRODUCT_STORAGE_KEY, []);
  if (!deletedIds.includes(id)) {
    localStorage.setItem(
      DELETED_PRODUCT_STORAGE_KEY,
      JSON.stringify([...deletedIds, id])
    );
  }

  setCatalog(prev => {
    const updated = prev.filter(p => p.id !== id);

    // Save immediately so the deletion survives refresh.
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(updated));

    // Update any other open tab/window.
    window.dispatchEvent(
      new CustomEvent("fitrent-products-updated", {
        detail: updated
      })
    );

    return updated;
  });

  // If deleted equipment was already in cart, remove it there too.
  setCart(prev => prev.filter(item => item.id !== id));

  // If its detail page was open, close it.
  setSelected(prev => prev && prev.id === id ? null : prev);
};
  const [offer, setOffer] = useState(() =>
  getStorage(OFFER_STORAGE_KEY,{
    enabled:false,
    title:"",
    discount:0,
    category:"All Equipment",
    start:"",
    end:""
  })
);

useEffect(()=>{
  localStorage.setItem(OFFER_STORAGE_KEY, JSON.stringify(offer));
},[offer]);
  useEffect(() => {
  const disabledIds = new Set(
    catalog.filter(p => p.enabled === false).map(p => p.id)
  );

  setCart(prev => {
    const updated = prev.filter(item => !disabledIds.has(item.id));
    return updated.length === prev.length ? prev : updated;
  });

  setSelected(prev =>
    prev && disabledIds.has(prev.id) ? null : prev
  );
}, [catalog]);

useEffect(()=>localStorage.setItem("fitrent_cart",JSON.stringify(cart)),[cart]);
  useEffect(()=>{localStorage.setItem(PRODUCT_STORAGE_KEY,JSON.stringify(catalog))},[catalog]);
  // ---------- Backend sync: load par server se latest data, admin save par server ko bhejo ----------
  const backendReady = useRef(false);
  const catalogTouched = useRef(false);
  const firstCatalogRun = useRef(true);
  useEffect(() => {
    if (firstCatalogRun.current) { firstCatalogRun.current = false; return; }
    catalogTouched.current = true;
  }, [catalog]);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_URL}/api/products`);
        const data = await res.json();
        if (!cancelled && !catalogTouched.current && Array.isArray(data) && data.length) {
          const deletedIds = new Set(getStorage(DELETED_PRODUCT_STORAGE_KEY, []));
          const serverCatalog = data
            .filter(p => !deletedIds.has(p.id))
            .map(p => ({ ...p, popular: p.popular ?? false, enabled: p.enabled ?? true }));
          if (serverCatalog.length) {
            setCatalog(serverCatalog);
            localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(serverCatalog));
          }
        }
      } catch (e) { /* backend offline — local data chalega */ }
      try {
        const res2 = await fetch(`${API_URL}/api/offer`);
        const offerData = await res2.json();
        if (!cancelled && offerData) {
          setOffer(offerData);
          localStorage.setItem(OFFER_STORAGE_KEY, JSON.stringify(offerData));
        }
      } catch (e) { /* ignore */ }
      if (!cancelled) backendReady.current = true;
    })();
    return () => { cancelled = true; };
  }, []);
  useEffect(() => {
    if (!backendReady.current || !admin) return;
    fetch(`${API_URL}/api/products`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-admin-key": ADMIN_KEY },
      body: JSON.stringify(catalog)
    }).catch(() => {});
  }, [catalog]);
  useEffect(() => {
    if (!backendReady.current || !admin) return;
    fetch(`${API_URL}/api/offer`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-admin-key": ADMIN_KEY },
      body: JSON.stringify(offer)
    }).catch(() => {});
  }, [offer]);
  // Admin / admin-login se browser ka Back dabane par seedha bahar
  // jaane ke bajaye website ke Home page par wapas le jao
  // (laptop aur mobile dono par kaam karega).
  useEffect(() => {
    if (page !== "admin" && page !== "admin-login") return;
    window.history.pushState({ adminPanel: true }, "");
    const onPopState = () => setPage("home");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [page]);
  useEffect(() => {
  window.scrollTo(0, 0);
}, [page, selected]);

  useEffect(() => {
  const handleProductsUpdated = (event) => {
    if (Array.isArray(event.detail)) {
      setCatalog(event.detail);
    }
  };

  const handleStorageChange = (event) => {
    if (event.key === PRODUCT_STORAGE_KEY) {
      try {
        const updated = JSON.parse(event.newValue || "[]");

        setCatalog(
          updated.map(p => ({
            ...p,
            popular: p.popular ?? false,
            enabled: p.enabled ?? true
          }))
        );
      } catch {
        // Ignore invalid localStorage data
      }
    }
  };

  window.addEventListener(
    "fitrent-products-updated",
    handleProductsUpdated
  );

  window.addEventListener(
    "storage",
    handleStorageChange
  );

  return () => {
    window.removeEventListener(
      "fitrent-products-updated",
      handleProductsUpdated
    );

    window.removeEventListener(
      "storage",
      handleStorageChange
    );
  };
}, []);
  useEffect(()=>{if(user)localStorage.setItem("fitrent_user",JSON.stringify(user));else localStorage.removeItem("fitrent_user")},[user]);
  useEffect(()=>{if(admin)localStorage.setItem(ADMIN_STORAGE_KEY,JSON.stringify(admin));else localStorage.removeItem(ADMIN_STORAGE_KEY)},[admin]);
  const add=(p,duration=3,quantity=1)=>{
  setCart(prev=>{
    const key=p.id+"-"+duration;
    const found=prev.find(x=>x.key===key);
    return found
      ? prev.map(x=>x.key===key?{...x,qty:x.qty+quantity}:x)
      : [...prev,{...p,key,qty:quantity,duration,rentalMonths:duration}];
  });
  setShowCart(true);
};

  // Rent Now requires a signed-in customer before opening checkout.
  const rentNow=(p,duration=3,quantity=1)=>{
    const key=p.id+"-"+duration;
    const item={...p,key,qty:quantity,duration,rentalMonths:duration,rentalPrice:Number(p.rentalPrice || (duration===3 ? p.price3Month || p.price*3 : p.price6Month || p.price*6))};
    if(!user){
      // Guests must authenticate before they can rent. Keep the selected
      // rental in memory so a successful login continues directly to checkout.
      setPendingRent(item);
      setSelected(null);
      setShowCart(false);
      setAuthPurpose("rent");
      setAuth("login");
      return;
    }
    setCheckoutItems([item]);
    setSelected(null);
    setShowCart(false);
    setCheckout(true);
  };

  const login=u=>{
    setUser(u);
    setAuth(null);
    if(pendingRent){
      setCheckoutItems([pendingRent]);
      setPendingRent(null);
      setAuthPurpose(null);
      setCheckout(true);
      return;
    }
    if(authPurpose==="checkout" && cart.length){
      setCheckoutItems(cart);
      setAuthPurpose(null);
      setCheckout(true);
      return;
    }
    setAuthPurpose(null);
    setPage("rentals");
  };
  const adminLogin=a=>{setAdmin(a);setAuth(null);setPage("admin");window.history.replaceState({},"","/admin")};
  const finish=(customerDetails={})=>{
  const order={
    id:Date.now(),
    order:String(Math.floor(100000+Math.random()*899999)),
    status:"Active",
    customerName:customerDetails.name||"",
    customerPhone:customerDetails.phone||"",
    customerAddress:customerDetails.address||"",
    customerCity:customerDetails.city||"",
    customerPin:customerDetails.pin||"",
    customerAadhaar:customerDetails.aadhaar?`XXXX XXXX ${customerDetails.aadhaar.slice(-4)}`:"",
    customerPan:customerDetails.pan?`${customerDetails.pan.slice(0,5)}****${customerDetails.pan.slice(-1)}`:"",
    customerAadhaarFile:customerDetails.aadhaarFile||"",
    customerAadhaarFileName:customerDetails.aadhaarFileName||"",
    customerPanFile:customerDetails.panFile||"",
    customerPanFileName:customerDetails.panFileName||"",
    customerEmail:user?.email||""
  };
  const previous=getStorage("fitrent_rentals",[]);
  const newRentals=checkoutItems.map(item=>({...item,...order}));
  if(user?.email && (order.customerAadhaarFile || order.customerPanFile)){
    const currentUsers=getStorage("fitrent_users",[]);
    const updatedUsers=currentUsers.map(u=>u.email===user.email?{
      ...u,
      customerAadhaarFile:order.customerAadhaarFile,
      customerAadhaarFileName:order.customerAadhaarFileName,
      customerPanFile:order.customerPanFile,
      customerPanFileName:order.customerPanFileName,
      customerAadhaar:order.customerAadhaar,
      customerPan:order.customerPan
    }:u);
    localStorage.setItem("fitrent_users",JSON.stringify(updatedUsers));
  }
  newRentals.forEach(item => {
  sendAdminEmail({
    customer_name: order.customerName,
    phone: order.customerPhone,
    product: item.name,
    duration: `${item.duration || item.rentalMonths || 3} Months`,
    amount: item.rentalPrice || item.price,
    address: `${order.customerAddress}, ${order.customerCity} - ${order.customerPin}`
  });
});
  localStorage.setItem("fitrent_rentals",JSON.stringify([...newRentals,...previous]));
  // Backend par bhi save karo, taaki admin ko dusre device par bhi ye order dikhe.
  syncRentalsToBackend(newRentals);
  if(user?.email && (order.customerAadhaarFile || order.customerPanFile)){
    const me = getStorage("fitrent_users",[]).find(u=>u.email===user.email);
    if(me) callApi("POST", `${API_URL}/api/users/migrate`, [me], true);
  }
  setCheckoutItems([]);
  setCart([]);
  setCheckout(false);
  setShowCart(false);
  setPage("rentals");
};
  const goCategory=(category)=>{setSelected(null);setShopCategory(category);setPage("shop")};
  const navigate=(target)=>{setSelected(null);setPage(target)};
  const content =
page==="home"
? <Home
    setPage={setPage}
    onView={setSelected}
    onAdd={add}
    onCategory={goCategory}
    products={catalog.filter(p => p.enabled !== false)}
    offer={offer}
  />
: page==="shop"
? <Shop
    initialCategory={shopCategory}
    onView={setSelected}
    onAdd={add}
    products={catalog.filter(p => p.enabled !== false)}
    offer={offer}
  />:page==="shop"?<Shop initialCategory={shopCategory} onView={setSelected} onAdd={add} products={catalog}/>:page==="how"?<How/>:page==="about"?<About/>:page==="contact"?<Contact/>:page==="admin-login"?<AdminLoginPage onLogin={adminLogin} onBack={()=>setPage("home")}/>:page==="admin"&&admin?<AdminDashboard products={catalog} onSaveProducts={setCatalog} onDeleteProduct={deleteProduct} offer={offer}
  setOffer={setOffer} onLogout={()=>{setAdmin(null);setPage("home")}}/>:<Rentals user={user} setPage={setPage} onLogout={()=>{setUser(null);setPage("home")}}/>;
  if(page==="admin"){
    if(admin) return <AdminDashboard products={catalog} onSaveProducts={setCatalog}  onDeleteProduct={deleteProduct} offer={offer}
  setOffer={setOffer} onLogout={()=>{setAdmin(null);setPage("home");window.history.replaceState({},"","/")}}/>;
    return <AdminLoginPage onLogin={adminLogin} onBack={()=>{setPage("home");window.history.replaceState({},"","/")}}/>;
  }
  return <><Header page={page} setPage={setPage} onNavigate={navigate} setShopCategory={setShopCategory} cartCount={cart.reduce((s,x)=>s+x.qty,0)} user={user} setShowAuth={(mode)=>{setAuthPurpose(null);setAuth(mode)}} setShowCart={setShowCart} onLogout={()=>{setUser(null);navigate("home")}}/>{page==="home"&&<WhatsAppChat/>}{selected ?
  <ProductDetail
    p={selected}
    onBack={()=>{setSelected(null);setPage("shop")}}
    onAdd={add}
    onRentNow={rentNow}
    offer={offer}
  />
: content}{showCart&&<Cart items={cart} setItems={setCart} onCheckout={()=>{if(!user){setShowCart(false);setAuthPurpose("checkout");setAuth("login")}else{setCheckoutItems(cart);setShowCart(false);setCheckout(true)}}} onClose={()=>setShowCart(false)}/>} {auth === "admin" ? (
  <AdminAuth
    onClose={() => setAuth(null)}
    onLogin={adminLogin}
  />
) : auth === "forgot" ? (
  <ForgotPassword
    onClose={() => setAuth(null)}
    onBackToLogin={() => setAuth("login")}
  />
) : auth ? (
  <Auth
    mode={auth}
    setMode={setAuth}
    onClose={() => setAuth(null)}
    onLogin={login}
  />
) : null} {checkout&&<Checkout items={checkoutItems} onClose={()=>{setCheckout(false);setCheckoutItems([])}} onSuccess={finish}/>}
{page !== "shop" && (
  <footer className="site-footer">
    <div className="footer-overlay"/>

    <div className="footer-content">
      <div className="footer-main">

        <div className="footer-brand">
          <Logo/>
          <p className="footer-tagline">Rent. Train. Achieve.</p>
          <p>
            Your one-stop platform for premium gym equipment rentals.
            Get the best fitness gear at your doorstep, anytime, anywhere.
          </p>

          <div className="footer-benefits">
            <span><b>✓</b> Secure<br/>Payments</span>
            <span><b>▣</b> Fast<br/>Delivery</span>
            <span><b>◉</b> 24/7<br/>Support</span>
          </div>

          <div className="socials">
            <span>◎</span>
            <span>f</span>
            <span>𝕏</span>
            <span>▶</span>
            <span>in</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <button onClick={()=>setPage("home")}>Home</button>
          <button onClick={()=>{
            setShopCategory("All Equipment");
            setPage("shop");
          }}>Shop</button>
          <button onClick={()=>setPage("how")}>How It Works</button>
          <button onClick={()=>setPage("about")}>About Us</button>
          <button>Contact</button>
        </div>

        <div className="footer-col">
          <h4>CATEGORIES</h4>
          <button onClick={()=>goCategory("Treadmills")}>Treadmills</button>
          <button onClick={()=>goCategory("Cross Trainers")}>Cross Trainers</button>
          <button onClick={()=>goCategory("Exercise Bikes")}>Exercise Bikes</button>
        </div>

        <div className="footer-col">
          <h4>SUPPORT</h4>
          <button>Help Center</button>
          <button>Shipping Policy</button>
          <button>Return Policy</button>
          <button>Terms & Conditions</button>
          <button>Privacy Policy</button>
        </div>

        <div className="footer-col">
          <h4>RENTAL INFO</h4>
          <button>How Renting Works</button>
          <button>Rental Duration</button>
          <button>Equipment Care</button>
          <button>FAQs</button>
          
        </div>

        <div className="footer-update">
          <h4>STAY UPDATED</h4>

          <p>
            Get the latest offers, new arrivals and fitness tips straight
            to your inbox.
          </p>

          <div className="newsletter">
            <input placeholder="Enter your email address"/>
            <button>→</button>
          </div>

          <div className="contact-line">
            ⌕ &nbsp; +91 9871482091
          </div>

          <div className="contact-line">
            ✉ &nbsp; inhousegym@gmail.com
          </div>

          <div className="contact-line">
            ⌖ &nbsp; Gargs Importers and Traders LLP,Style Plaza, Jharsa Road, Sector-15, Part-1, Gurgaon (Haryana) -122001,India
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 InHouseGym. All rights reserved.</span>
        <span>Rent. Train. Achieve.</span>
      </div>

    </div>
  </footer>
)}
</>;
}

createRoot(document.getElementById("root")).render(<App/>);
