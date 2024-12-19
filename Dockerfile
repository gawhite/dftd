FROM denoland/deno

WORKDIR /app

COPY . .
RUN deno cache main.ts
RUN deno task build

USER deno
EXPOSE 8001

CMD ["run", "-A", "main.ts"]