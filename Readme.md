 apt install docker-compose

 docker-compose up --build


 Lab-1:- 

 Setting Traefik Reverse Proxy:- 

 # docker command to run the traefik using the above the traefik.yaml file to use traefik as the reverse proxy. 
docker run -d -p 8080:8080 -p 80:80 \
  -v $PWD/traefik.yml:/etc/traefik/traefik.yml \
  -v /var/run/docker.sock:/var/run/docker.sock \
  traefik:v3


# Hosting Configuration:- 

vi /etc/hosts

<ip of the server> docker.localhost

# TO check the output:- 

curl http://web-server1.docker.localhost ----> nginx container.
curl http://web-server2.docker.localhost ----> httpd container. 
