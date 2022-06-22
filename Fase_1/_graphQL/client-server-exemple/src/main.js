import { createServer, request } from "http";
import { readFile } from "fs";
import { resolve } from "path"

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.write(
        JSON.stringify({
          status: "ok",
        })
      );
      response.end();
      break;
    }
    case "/sing-in": {
        const path = resolve(__dirname,"./pages/sing-in.html");
        readFile(path, (error, file) => {
            if (error) {
                response.writeHead(500, 'Cant\`t process HTML file' + error);
                response.end();
                return;
            }
            
            response.writeHead(200);
            response.write(file);
            response.end();
        });
    }

    default: {
      response.writeHead(404, `Service not found`);
      response.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});
