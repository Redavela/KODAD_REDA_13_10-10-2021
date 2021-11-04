import { useDispatch } from 'react-redux';
import { login} from '../slices/userSlice'
import { findProfileUser } from './userProvider';



export const ManageUser = () => {
    const token = sessionStorage.getItem('userToken')
    const dispatch = useDispatch()
    if(token){
        (async () => {
            const profileUser = await findProfileUser(token);
            dispatch(login({
                token,
                info: profileUser.body
            }))
          })();
    }
};

