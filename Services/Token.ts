import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { TokenRepository } from "../Repositories/Repository/Token"

const repository = new TokenRepository();

export class Token {
    public createToken = async (user: any) => {
        const timeExpires = "1d";
        const accesToken = jwt.sign({ user }, "alo", { expiresIn: timeExpires });
        const item = {
            uuid: uuidv4(),
            tokenCode: accesToken,
            userId: user
        }

        await repository.create(item);
    }
}