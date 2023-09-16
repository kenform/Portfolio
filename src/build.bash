#!/bin/sh

cd /home/byurrer/freelance-portfolio-react/
npm run-script build

# дальше будет код отправки скомпилированного кода
$ rsync --delete -avz -e "ssh -i ~/.ssh/key" --progress /home/byurrer/freelance-portfolio-react/front/build/ root@ip:/var/www/htdocs/


