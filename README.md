# Use guide

## Install requirement
`git`
`nodejs`
`npm`
`nginx`

### Install Certbot

`sudo add-apt-repository ppa:certbot/certbot`
`sudo apt-get update`
`sudo apt-get install certbot`

### Install node app

```
  git clone https://github.com/danh20051995/get-certbot-ssl
  cd ./get-certbot-ssl
  npm i
```

### Start node app

- With `pm2`: `pm2 start index.js`

### Add nginx config

- Update `./well-known.nginx.conf` with your `<root_directory>` and `<your_domain>`
- Copy nginx config: `cp ./well-known.nginx.conf <~/nginx>/sites-enabled/well-known.nginx.conf`
- Restart nginx service
- Run: `certbot certonly --webroot --webroot-path=<root_directory> -d <your_domain>`
- Update `./https-sample.nginx` `<your_domain>` and add into nginx config
