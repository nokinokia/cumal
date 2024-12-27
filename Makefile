run:
	docker build -t nginx .; docker run -p 8080:80 -v ${PWD}:/usr/share/nginx/html nginx

config:
	git config --global user.email "youccc@hotmail.com" && git config --global user.name "youccc"

push:
	git add . && git commit -m "Auto commit" && git push

.PHONY: run config push
