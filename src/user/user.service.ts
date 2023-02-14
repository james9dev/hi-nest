import { Node, types } from 'neo4j-driver'
import { Neo4jService } from 'nest-neo4j'
import { Injectable } from '@nestjs/common';
import { EncryptionService } from '../encryption/encryption.service';

export type User = Node

@Injectable()
export class UserService {
    constructor(
        private readonly neo4jService: Neo4jService,
        private readonly encryptionService: EncryptionService
    ) {}

    async create(
        method: string, 
        providerToken: string,
        providerId?: string,
        name?: string,
        email?: string,
        dateOfBirth?: Date
        ): Promise<User> {

            const res = await this.neo4jService.write(`
            CREATE (u:User) 
            SET u += $properties, u.id = randomUUID()
            RETURN  u
            `, 
                {
                    properties: {
                        method,
                        providerToken,
                        providerId: await this.encryptionService.hash(providerId),
                        name,
                        email,
                        dateOfBirth: types.Date.fromStandardDate(dateOfBirth)
                    }
                })

                
            return res.records[0].get('u')
    }
}
