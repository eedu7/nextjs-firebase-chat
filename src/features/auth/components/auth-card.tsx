import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SocialLogin } from "@/features/auth/components/social-login";

interface AuthCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export const AuthCard = ({ title, description, children }: AuthCardProps) => {
    return (
        <Card className="w-md max-w-lg">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <SocialLogin />
            </CardFooter>
        </Card>
    );
};
