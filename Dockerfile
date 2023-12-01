# Dockerfile for aviarytech/uni-resolver-driver-did-btco

FROM oven/bun:1

# build uni-resolver-driver-did-btco

WORKDIR /usr/src/app
COPY package.json ./
RUN bun install
COPY . .

# variables

ENV uniresolver_driver_did_example_exampleSetting=exampleSetting
ENV uniresolver_driver_did_btco_ORD_SIGNET_API=https://modern-ghosts-cadmp.loca.lt

# done

EXPOSE 8080

CMD [ "bun", "run", "start" ]
