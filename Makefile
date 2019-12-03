.PHONY: build gzipHtml provision

dev:
	npm run dev

build:
	- rm -rf dist
	npm run build
	make -s gzip

gzip:
	make gzipHTML
	make gzipJS
	make gzipCSS

gzipHTML:
	for i in `find dist -name "*.html" -type f`; do \
		gzip $$i; \
		echo $$i.gz; \
		mv $$i.gz $$i; \
	done

gzipJS:
	for i in `find dist -name "*.js" -type f`; do \
		gzip $$i; \
		echo $$i.gz; \
		mv $$i.gz $$i; \
	done

gzipCSS:
	for i in `find dist -name "*.css" -type f`; do \
		gzip $$i; \
		echo $$i.gz; \
		mv $$i.gz $$i; \
	done

deploy:
	aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --exclude "*" --include "*.js" --include "*.css" --content-encoding gzip --cache-control max-age=2592000,public
	aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --exclude "*" --include "*.html" --content-encoding gzip --cache-control max-age=0,public
	aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --include "*" --exclude "*.js" --exclude "*.css" --exclude "*.html" --cache-control max-age=2592000,public
