# Label your data

In your project, there are five documents, four of the documents have a purple dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled.

## Video introduction to labeling forms with Form Recognizer

Watch this YouTube to understand how to label an English language version of a form. Open the video on Youtube to watch in full screen.

<iframe width="800" height="450" src="https://www.youtube.com/embed/d1QHX47mSDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## New patient registration form

The following image is of the fifth document that needs to be labeled.

![The image shows the label data panel](./img/label-data-panel.png)

## Label the new patient registration form

The following steps will show you how to label your data. 

The document language will match the folder of documents you uploaded to your Azure Storage Account. For example, if you uploaded the English folder, the document language will be English.

1. Select the last document in the list of documents. The document is named _sample.pdf_. Selecting the document will analyze and then open the document for labeling.
1. Select the ISO language code for the document. You'll find this field in the top right-hand corner of the document, then from the list of labels, select **iso**.

You can filter the list of labels by typing the label name in the list of labels dropdown. For example, if you type `family` in the list of labels, the `family_name` label will be displayed.

The following tables show the labels that are available for the new patient registration form for the following languages:

- [English Labels](#english-labels)
- [Etiquetas espanholas](#etiquetas-espanholas)
- [Etiquetas portuguesas](#etiquetas-portuguesas)
- [普通话标签](#普通话标签)

## English Labels

1. Select the Family name field on the analyzed document, then from the list of labels, select `family_name`.
1. Repeat this process for the remaining fields in the document. It's important to correctly label all the fields in the document as they will be used to train the model.

    |  Document element | Label name  |
    |---|---|
    | Document language iso | iso  |
    | Family name  | family_name  |
    | Given names  | given_names  |
    | Date of birth             | date_of_birth |
    | Street address | address_street |
    | City|  address_city |
    | State | address_state |
    | Code | address_code |
    | Email | email |
    | Phone | phone |
    | Prefer Email checkbox | prefer_email |
    | Prefer Phone checkbox | prefer_phone |
    | Prefer Text checkbox | prefer_text |
    | My gender identity | gender_identity |
    | My pronouns | my_pronouns |
    | Emergency contact name | emergency_name |
    | Emergency contact relationship | emergency_relationship |
    | Emergency contact email | emergency_email |
    | Emergency contact phone | emergency_phone |
    | Allergy row 1 | allergy_1 |
    | Allergy row 2 | allergy_2 |
    | Allergy row 3 | allergy_3 |
    | Reaction row 1 | reaction_1 |
    | Reaction row 2 | reaction_2 |
    | Reaction row 3 | reaction_3 |

You now have all the documents in your dataset labeled. If you look at the storage account, you'll find a *.labels.json* and *.ocr.json* files that correspond to each document in your training dataset and a new fields.json file. This training dataset will be submitted to train the model.

## Etiquetas espanholas

1. Seleccione el campo Nombre de familia en el documento analizado, luego de la lista de etiquetas, seleccione `nombre_de_familia`.
1. Repita este proceso para los campos restantes del documento. Es importante etiquetar correctamente todos los campos del documento, ya que se utilizarán para entrenar el modelo.

    |  Elemento de documento | Nombre de etiqueta  |
    |---|---|
    | Idioma del documento iso | iso  |
    | Apellido | family_name  |
    | Nombres dados | given_names  |
    | Fecha de nacimiento             | date_of_birth |
    | Dirección | address_street |
    | Ciudad|  address_city |
    | Estado | address_state |
    | Código | address_code |
    | Correo electrónico | email |
    | Teléfono | phone |
    | Casilla de verificación Preferir correo electrónico| prefer_email |
    | Preferir casilla de teléfono | prefer_phone |
    | Preferir casilla de texto| prefer_text |
    | Mi identidad de genero| gender_identity |
    | Mis pronombres | my_pronouns |
    | Nombre del contacto de emergencia | emergency_name |
    | Relación de contacto de emergencia | emergency_relationship |
    | Correo electrónico de contacto de emergencia | emergency_email |
    | Teléfono de contacto de emergencia | emergency_phone |
    | Alergia fila 1 | allergy_1 |
    | Alergia fila 2 | allergy_2 |
    | Alergia fila 3| allergy_3 |
    | Fila de reacción 1 | reaction_1 |
    | Fila de reacción 2 | reaction_2 |
    | Fila de reacción 3 | reaction_3 |

Ahora tiene todos los documentos en su conjunto de datos etiquetados. Si observa la cuenta de almacenamiento, encontrará archivos *.labels.json* y *.ocr.json* que corresponden a cada documento en su conjunto de datos de entrenamiento y un nuevo archivo fields.json. Este conjunto de datos de entrenamiento se enviará para entrenar el modelo.

## Etiquetas portuguesas

1. Selecione o campo Family name no documento analisado e, na lista de rótulos, selecione `family_name`.
1. Repita este processo para os demais campos do documento. É importante rotular corretamente todos os campos no documento, pois eles serão usados para treinar o modelo.

    |  Elemento do documento | Nome do rótulo  |
    |---|---|
    | Idioma do documento iso | iso  |
    | Sobrenome | family_name  |
    | Recebem nomes  | given_names  |
    | Data de nascimento            | date_of_birth |
    | endereço da Rua | address_street |
    | Cidade |  address_city |
    | Estada | address_state |
    | Código | address_code |
    | E-mail | email |
    | Phone | Telefone |
    | E-mail de preferência checkbox | prefer_email |
    | Telefone de preferência checkbox | prefer_phone |
    | Texto de preferência checkbox | prefer_text |
    | Minha identidade de gênero | gender_identity |
    | Meus pronomes | my_pronouns |
    | Nome do contato de emergência | emergency_name |
    | Relacionamento de contato de emergência | emergency_relationship |
    | E-mail de contato de emergência | emergency_email |
    | Telefone de contato de emergência | emergency_phone |
    | Alergia linha 1 | allergy_1 |
    | Alergia linha 2 | allergy_2 |
    | Alergia linha 3 | allergy_3 |
    | Linha de reação 1 | reaction_1 |
    | Linha de reação 2 | reaction_2 |
    | Linha de reação 3 | reaction_3 |
    
Agora você tem todos os documentos em seu conjunto de dados rotulados. Se você observar a conta de armazenamento, encontrará arquivos *.labels.json* e *.ocr.json* que correspondem a cada documento em seu conjunto de dados de treinamento e um novo arquivo fields.json. Este conjunto de dados de treinamento será enviado para treinar o modelo.

## 普通话标签

1. 选择分析文档上的姓氏字段，然后从标签列表中选择“family_name”。
1. 对文档中的其余字段重复此过程。 正确标记文档中的所有字段非常重要，因为它们将用于训练模型。

    |  文档元素 | 标签名称  |
    |---|---|
    | 文档语言 iso | iso  |
    | 姓  | family_name  |
    | 姓  | given_names  |
    | 出生日期             | date_of_birth |
    | 街道地址 | address_street |
    | 城市|  address_city |
    | 状态 | address_state |
    | 代码 | address_code |
    | 电子邮件 | email |
    | 电话 | phone |
    | 首选电子邮件复选框 | prefer_email |
    | 首选电话复选框| prefer_phone |
    | 首选文本复选框 | prefer_text |
    | 我的性别认同 | gender_identity |
    | 我的代名词 | my_pronouns |
    | 紧急联络名字 | emergency_name |
    | 紧急联络关系 | emergency_relationship |
    | 紧急联络电子邮件 | emergency_email |
    | 紧急联络电话 | emergency_phone |
    | 过敏第 1 行 | allergy_1 |
    | 过敏第 2 行 | allergy_2 |
    | 过敏第 3 行 | allergy_3 |
    | 反应排 1 | reaction_1 |
    | 反应第 2 行 | reaction_2 |
    | 反应排 3 | reaction_3 |

您现在已标记数据集中的所有文档。 如果您查看存储帐户，您会发现与训练数据集中的每个文档相对应的 *.labels.json* 和 *.ocr.json* 文件以及一个新的 fields.json 文件。 此训练数据集将被提交以训练模型。