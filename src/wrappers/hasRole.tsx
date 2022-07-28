import { Redirect, useModel } from 'umi'

export default (props) => {
    //const { isLogin } = useAuth();
    const { connection } = useModel('useWeb3Model', (model) => ({
        connection: model.connection
    }));
    if (connection.hasRole) {
        return <div>{props.children}</div>;
    } else {
        return <Redirect to="/404" />;
    }
}