import { ICredential } from "../@types";

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type AuthContextProviderProps = {
    children: ReactNode
}

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<IUser>();
    cont [token, setToken] = useState<string>();

    useEffect(()=> {
        //Recupera os valores da Local Storage
        const storageToken = localStorage.getItem('token');
        const storageUser = localStorage.getItem('user');

        if (storageToken&&storageUser) {
            storageToken(storageToken);
            setUser(JSON.parse(storageUser));
        }
    })

    const login = async (credential: ICredential) => {

        await SignInPage(credential)
            .then(result => {

                const token = result.data.acessToken;

                console.log('TOKEN', token)

            })
            .catch(error => {
                return new Promise((resolve, reject) => {

                })

            })
    }
}