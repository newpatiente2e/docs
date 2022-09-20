# Create new patient web app

## Update the patient registration app

1. Start VS Code and open the `contoso_new_patient_app` folder.
1. Open the ????? function.
1. Scroll down to the `// TODO: Add code here` section.
1. Add the following code snippet at the TODO area

    ```c#
    var webclient = new WebClient();
    webclient.Headers.Add("Content-Type", "application/json");
    webclient.Headers.Add("Ocp-Apim-Subscription-Key", "YOUR_FORM_RECOGNIZER_KEY");
  
    ...
    ...
    ```
1. Replace `YOUR_FORM_RECOGNIZER_KEY` with the subscription key for the `new_patient` API.
1. Save the file.
1. Select `Ctrl+Shift+~` to open a new terminal.
1. From the terminal, run the following command to start the function app. This command will deploy the updated function to Azure.

    ```bash

    ```bash
    azd up ...
    ```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in odio vel enim sodales accumsan. Curabitur accumsan bibendum elit pharetra finibus. Aliquam urna magna, facilisis vitae orci at, ultrices rhoncus sem. Nam ut metus risus. Vivamus mattis pellentesque arcu at condimentum. Quisque tristique varius arcu eu volutpat. Nullam pharetra leo sit amet erat sagittis, non mollis elit porttitor. Aliquam tincidunt, nisl vitae tempus finibus, urna leo aliquam elit, id iaculis justo mauris eu dolor. Sed tempus magna sit amet aliquet ullamcorper. Duis facilisis aliquam viverra. Pellentesque iaculis tincidunt tristique. Integer sed enim efficitur, iaculis risus eget, aliquam neque. Etiam congue id lectus vel tincidunt. Proin tristique lobortis ex, sed elementum ex congue consequat.