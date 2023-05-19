interface Session {
   user: User;
   expires: string;  
}

interface User {
   name?: string | null | undefined;
   email?: string | null | undefined;
   image?: string | null | undefined;
}  