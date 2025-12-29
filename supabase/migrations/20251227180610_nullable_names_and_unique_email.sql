alter table "public"."users" alter column "first_name" drop not null;

alter table "public"."users" alter column "last_name" drop not null;

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);

alter table "public"."users" add constraint "users_email_key" UNIQUE using index "users_email_key";


