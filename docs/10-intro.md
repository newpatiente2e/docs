---
sidebar_position: 1
slug : /
---

# Tutorial Intro

Applied AI and Cognitive Services End to End Health Sector focus built around Form Recognizer Scenario: Health Sector – New Patient registration.

## Introduction to Form Recognizer

Form Recognizer is a new Cognitive Service that uses machine learning to extract text and table data from form documents. You can train custom models to extract data specific to your forms, or use the prebuilt models to extract common fields from receipts, invoices, and business cards.

This tutorial will walk you through the process of creating a custom model using Form Recognizer Studio. You will use the model to extract data from a new patient registration form.

## Problem Statement

Streamline and improve accuracy of new patient registration system. New patient registration is still a paper-based process and will continue to be for the foreseeable future.

This solution aims to address data issues that creep in with a paper-based systems as well as reduce the overhead associated with entering the new patient information into backend systems.

## Personas

|  Persona |   | |
|---|---|---|
| Surgery admin: Drew |  Drew role is to ensure new patient are registered in the system. Drew also verifies new patient data before committing to the patient data to the patient system. | ![The image shows the picture of an admin](../static/img/drew.png) |
| Nurse: Alex | Alex uses new patient registration to understand any existing allergies or medicine reactions. | ![The image shows the picture of a nurse](../static/img/alex.png) |
| Doctor: Anthony |  Anthony uses new patient registration to understand any existing allergies or medicine reactions. Anthony uses the new patient system to record medical events. | ![The image shows the photo of a doctor](../static/img/anthony.jpg) |

## New registration process

1. New patient completes form.
1. Uploads, then verifies information including spell check.
1. Submits verified new data.
1. Surgery admin verifies registration and adds to the doctors patient management system.
1. Data is stored in patient system.
1. Document data analyzed and translated.

![The image shows the registration process](../static/img/registration_process.png)

## Architecture

![The image shows the architecture of the solution](../static/img/architecture.png)
