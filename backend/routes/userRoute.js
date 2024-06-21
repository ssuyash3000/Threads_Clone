import express from 'express';
import logics from '../controller/userController.js';
import protectRoute from '../middleware/protectedRoute.js';

const userRouter = express.Router();


userRouter.get("/profile/:name", logics.getUserProfile)
userRouter.post("/signup", logics.userSignup)
userRouter.post("/login", logics.userLogin)
userRouter.post("/logout", logics.userLogout)
userRouter.post("/follow/:id", protectRoute, logics.followUnfollow)
userRouter.put("/updateuser/:id", protectRoute, logics.updateUserProfile)



export default userRouter;