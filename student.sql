create table student (
  id UUID DEFAULT gen_random_uuid (),
  firstName VARCHAR NOT NULL,
  isProgrammer boolean DEFAULT false
);