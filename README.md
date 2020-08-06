# Use guide

## Install requirement
  - [git](https://git-scm.com/)
  - [nodejs](https://nodejs.org)
  - [npm](https://www.npmjs.com/)
  - [nginx](https://www.nginx.com/)

### Install certbot

```bash
  sudo add-apt-repository ppa:certbot/certbot
  sudo apt-get update
  sudo apt-get install certbot
```

### Install node app

- [Github](https://github.com/danh20051995/get-certbot-ssl)

```bash
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
- Example get one ssl for multiple domains: `sudo certbot certonly --webroot --webroot-path="/path/to/get-certbot-ssl" -d yourdomain.com -d www.yourdomain.com -d api.yourdomain.com -d admin.yourdomain.com`
- Example renew all ssl: `sudo certbot renew --webroot-path="/path/to/get-certbot-ssl"`

### Get standalone ssl

- Config your DNS to serve first

```bash
  sudo service nginx stop
  certbot certonly --standalone -d <domain>
  sudo service nginx restart
```
- Run renew with hook

```bash
sudo certbot renew --pre-hook "service nginx stop" --post-hook "service nginx start"
```
