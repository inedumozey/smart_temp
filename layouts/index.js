import { useRouter } from 'next/router';
import AdminLayout from "./adminLayout/AdminLayout.jsx";
import UsersLayout from "./usersLayout/UsersLayout.jsx";
import PublicLayout from "./publicLayout/PublicLayout.jsx";

const Layouts =({children, userInfo, toggleState})=>{
    const router = useRouter();
    const path = router.pathname;

    if(path.includes('dashboard')){
      return <UsersLayout userInfo={userInfo}>{children}</UsersLayout>
    }

    else if(path.includes('admin')){
      return <AdminLayout userInfo={userInfo} toggleState={toggleState}>{children}</AdminLayout>
    }

    else{
      return <PublicLayout userInfo={userInfo}>{children}</PublicLayout>
    }

}

export default Layouts;
