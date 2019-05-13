FROM php:7.2-fpm

MAINTAINER Dmitry Shitov <shitov.dm@gmail.com>

RUN mkdir -p /app/app/cache
RUN mkdir -p /app/var/logs
RUN mkdir -p /app/var/logs/nginx-backend
RUN mkdir -p /app/var/logs/nginx-frontend
RUN chmod -R 777 /app

RUN apt-get update && apt-get install -y \
        curl \
        wget \
        git \
        openssl \
        libssl-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        net-tools \
        iputils-ping \
    && docker-php-ext-install -j$(nproc) iconv mbstring zip \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install opcache

RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

# Install Composer
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN curl -sS https://getcomposer.org/installer | php -- \
        --filename=composer \
        --install-dir=/usr/local/bin && \
        echo "alias composer='composer'" >> /root/.bashrc && \
        composer
		
RUN composer --version

ADD php.ini /usr/local/etc/php/conf.d/40-custom.ini

WORKDIR /app

CMD ["php-fpm"]

EXPOSE 465
EXPOSE 9000