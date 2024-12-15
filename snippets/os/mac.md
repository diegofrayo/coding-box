## How to

- [**Creating Password Protected Zip Files in Mac**](https://www.canr.msu.edu/news/encrypted-zip-mac)
  `zip -er NAME_OF_ZIP_FILE.zip ./your-file-or-folder-path.ext`

- [**How can I list my open network ports with netstat?**](https://apple.stackexchange.com/questions/117644/how-can-i-list-my-open-network-ports-with-netstat)
  `netstat -anvp tcp | awk 'NR<3 || /LISTEN/'`

- [**Kill a process by port**](https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac)

  - Search for the process PID: `sudo lsof -i :3000`
  - Kill the process: `kill -9 <PID>`

- [**Find a process by name**](https://www.cyberciti.biz/faq/linux-find-process-name/)

  - `pgrep firefox`
  - `pidof firefox`
  - `ps aux | grep -i firefox`

- **Create bash aliases**

  - Open `/Users/diegofrayo/.zshrc`
  - Add your aliases

    ```bash
    alias nrd="npm run dev"
    ```

  - Open a new terminal instance and run your alias

## Keyboard shortcuts

- **Mas usados**

  - Pausar QuickTime
    `CTRL + CMND + ESC`
  - Mostrar escritorio
    `FN + F11`
  - Captura de toda la pantalla
    `CMND + SHIFT + 3`
  - Recorte de pantalla
    `CMND + SHIFT + 4`
  - Pegar con estilo
    `CTRL + SHIFT + W`

- **Chrome**

  - Cerrar ventana o tab
    `CTRL + W`
  - Mostrar developer tools
    `CMND + OPT + i`
  - Cambiar de pestañas
    `CMND + OPT + left/right key`

- **Finder**

  - Abrir carpeta
    `CMND + ↓`
  - Mostrar archivos ocultos
    `CMND + SHIFT + .`
  - Regresar atras
    `CMND + ↑`
  - Personalizar toolbar
    `CTRL + SHIFT + Drag mouse`
  - Cambiar de pestañas
    `CMND + CTRL + left/right row`

- **Spotify**

  - Seek backward/forward

    `Cmd + Shift + Left/Right`
