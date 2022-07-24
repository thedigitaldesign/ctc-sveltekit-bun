# Prisma
## Commands

[Prisma Command Reference Doc](https://www.prisma.io/docs/reference/api-reference/command-reference)

**Commands**
- [Init](https://www.prisma.io/docs/reference/api-reference/command-reference#init): `npx prisma init`
- [Format](https://www.prisma.io/docs/reference/api-reference/command-reference#format): `npx prisma format`

**DB**
- [Push changes](https://www.prisma.io/docs/reference/api-reference/command-reference#db-push): `npx prisma db push`
- [Seed](https://www.prisma.io/docs/reference/api-reference/command-reference#db-seed): `npx prisma db seed`

**Studio**
- [Studio](https://www.prisma.io/docs/reference/api-reference/command-reference#studio): `npx prisma studio`


# DB
## Create Counselor
1. CampusType
2. Campus [fk_campustype_id]
3. Counselor [fk_campus_id]

## Create Activity
1. SubCategory (optional)
2. Category [fk_subcategory_id?]
3. Activity [fk_category_id]

## TimeEntry
1. TimeEntry [fk_activity_id]
