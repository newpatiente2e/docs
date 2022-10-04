# Form recognizer studio

Form recognizer studio is a web-based tool that allows you to create custom models. You can use it to label your training documents and train your custom model.

## Create custom model

Form Recognizer uses advanced machine learning to extract text and table data from your documents. You can train custom models to extract data specific to your forms, or use the prebuilt models to extract common fields from receipts, invoices, and business cards.

To train a custom model, you need to provide a set of labeled training documents. The training documents should be in the same format as the documents you want to recognize. For example, if you want to recognize receipts, you should provide labeled training receipts.

You need at least five examples of a document type to train a custom model. For example, if you want to recognize receipts, you'd need five labeled receipts examples.

## Custom model types

Custom models can be one of two types, [**custom template**](https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-template?WT.mc_id=aiml-77396-cxa) or custom form and [**custom neural**](https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-neural?WT.mc_id=aiml-77396-cxa) or custom document models. The labeling and training process for both models is identical, but the models differ as follows:

### Custom template model

The custom template or custom form model relies on a consistent visual template to extract the labeled data. The accuracy of your model is affected by variances in the visual structure of your documents. Structured  forms such as questionnaires or applications are examples of consistent visual templates.

Your training set will consist of structured documents where the formatting and layout is static and constant from one document instance to the next. Custom template models support key-value pairs, selection marks, tables, signature fields, and regions. Template models and can be trained on documents in any of the [supported languages](https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/language-support?WT.mc_id=aiml-77396-cxa). For more information, *see* [custom template models](https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-template?WT.mc_id=aiml-77396-cxa).

### Custom neural model

The custom neural (custom document) model uses deep learning models and base models trained on a large collection of documents. This model is then fine-tuned or adapted to your data when you train the model with a labeled dataset. Custom neural models support structured, semi-structured, and unstructured documents to extract fields. Custom neural models currently support English-language documents. When you're choosing between the two model types, start with a neural model to determine if it meets your functional needs. See [neural models](https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-neural?WT.mc_id=aiml-77396-cxa) to learn more about custom document models.

## New patient registration form

In this workshop, you will create a _custom template model_ to recognize the fields in the new patient registration form shown below. There are five forms in the training set, and each form contains the same fields, four of these forms have been labeled, the fifth form is unlabeled. As part of this workshop, you will label the fifth form.

<!-- The following form will use to train your custom template model and is found in the _contoso_new_patient_assets_ repo you cloned earlier.

![The image shows the new patient registration form](./img/new_patient_form.png) -->
