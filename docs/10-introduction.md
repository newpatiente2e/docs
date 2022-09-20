---
sidebar_position: 1
slug : /
---

# Tutorial Introduction

Most of the forms we complete nowadays are online but there are still times when we need to complete paper based forms. There are plenty of examples, for this tutorial, we've chosen a patient registration for a doctor's surgery as it's something we've all had to do at some point.

## Tutorial problem statement

This solution aims to address data issues that creep in with a paper-based systems as well as reduce the overhead associated with entering the new patient information into backend systems.

New patient registration for the doctor's surgery is still a paper-based process and will continue to be for the foreseeable future. The surgery is looking to improve the patient experience by moving to an online registration process. The surgery has a website and a mobile app but they are not currently integrated with the patient registration process.

## Tutorial goals

The goal of this tutorial is for you to learn how to infuse AI technologies into a patient registration system. The tutorial provides a step by step guide, taking you through the process of deploying the solution to Azure. You'll learn a little about Azure Static Web Apps, Azure Functions, Azure Cognitive Services, Azure Storage, and Azure Cosmos DB.

## Introduction to Form Recognizer

The solution will build on Azure Form Recognizer. Azure Form Recognizer is a new Cognitive Service that uses machine learning to extract text and table data from form documents. You can train custom models to extract data specific to your forms, or use the prebuilt models to extract common fields from receipts, invoices, and business cards.

## Tutorial Personas

|  Persona |   | |
|---|---|---|
| Surgery admin: Drew |  Drew role is to ensure new patient are registered in the system. Drew also verifies new patient data before committing to the patient data to the patient system. | ![The image shows the picture of an admin](../static/img/drew.png) |
| Nurse: Alex | Alex uses new patient registration to understand any existing allergies or medicine reactions. | ![The image shows the picture of a nurse](../static/img/alex.png) |
| Doctor: Anthony |  Anthony uses new patient registration to understand any existing allergies or medicine reactions. Anthony uses the new patient system to record medical events. | ![The image shows the photo of a doctor](../static/img/anthony.jpg) |

## Tutorial outline

The following is an outline of the tutorial:

1. Learn about and create the Azure services for the app.
1. Train a custom an Azure Form Recognizer model.
1. Create a web app that integrates with Form Recognizer.
1. Define application roles that map to the tutorial roles.
1. Implement app functions to support surgery admin, nurse and doctor roles.

## Solution overview

The following outlines the process of the solution:

1. New patient completes form.
1. Uploads, then verifies information including spell check.
1. Submits verified new data.
1. Surgery admin verifies registration and adds to the doctors patient management system.
1. Data is stored in patient system.
1. Document data analyzed and translated.
1. New patient registration records are available to the surgery's nurse and doctor.

![The image shows the registration process](../static/img/registration_process.png)

## Architecture

![The image shows the architecture of the solution](../static/img/architecture.png)
