import { useDispatch } from 'react-redux';
import { login} from '../slices/userSlice'



export const ManageUser = () => {
    const token = sessionStorage.getItem('userToken')
    const dispatch = useDispatch()
    if(token){
        dispatch(login(token))
    }
};

