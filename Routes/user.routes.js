import { Router } from 'express';

const userRouter = Router();

//GET USERS => get all users
//GET /users/:id => get users by id

userRouter.get('/', (req, res) => res.send({ title: 'GET all Users' }));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET Users details' }));
    
userRouter.post('/', (req, res) => res.send({ title: 'Create new Users' }));
    
userRouter.put('/:id', (req, res) => res.send({ title: 'Update Users' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'Delete Users' }));

export default userRouter;
