// bibliothèque ORM (Object-Relational Mapping) 
import { PrismaClient } from "@prisma/client"

// indique au compilateur TypeScript que la déclaration suivante concerne un élément global qui est disponible dans toute l'application
declare global {
  //Un namespace est un moyen d'organiser des éléments apparentés dans une zone de noms, afin d'éviter les conflits de noms avec d'autres parties de l'application.
  namespace globalThis {
    var prismadb: PrismaClient
  }
}