import { Request, Response } from "express";
import { User, users } from "../models/user"
import { error } from "node:console";



// GET: Obtener todos los usuarios

export const getAllUsers = (req: Request, res: Response): void => {
    res.json({
        sucess: true,
        data: users,
        total: users.length
    });
};

export const getUserById = (req: Request, res: Response): void => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id as string));

    if (!user) {
        res.status(404).json(
            {
                success: false,
                error: `Usuario con ID ${id} no encontrado`
            }
        );
        return;
    }

    res.json({
        success: true,
        data: user
    });
};

//  Post: Crear un nuevo usuario

export const createUser = (req: Request, res: Response): void => {
    const {name, email, age} = req.body;

    // Validaciones
    if (!name || !email || !age) {
        res.status(400).json({
            success: false,
            error: 'Los campos name, email, age son obligatorios'
        });
        return;
    }

    const newUser: User = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name,
        email,
        age
    };
    users.push(newUser);

    res.status(201).json({
        success: true,
        message: 'Usuario Crado exitosamente',
        data: newUser
    });
};


//  PUT : Actualizar usuario

export const updateUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const user = users.find(u => u.id === parseInt(id as string));

    if (!user) {
        res.status(400).json({
            success: false,
            error: ` Usuario con ID ${id} no encontrado`
        });
        return;
    };

    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;

    res.json({
        success: true,
        message: ' Usuario actualizado exitosamente',
        data: user
    });

};

//  DELETE: Eliminar Usuario

export const deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params
    const index = users.findIndex(u => u.id === parseInt(id as string));

    if (index === -1) {
        res.status(404).json({
            success: false,
            error: ` Usuario con ID ${id} no encontrado`
        });
        return;
    }

    const deleteUser = users.splice(index, 1);
    res.json({
        success: true,
        message: 'Usuario eliminado exitosamente',
        data: deleteUser[0]
    });
};


