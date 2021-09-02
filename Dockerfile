FROM php:7.4-apache

LABEL maintainer="Rhea"

WORKDIR /var/www/html

COPY public .