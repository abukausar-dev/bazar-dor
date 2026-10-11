interface UserAvatarProps {
    name: string;
    image?: string | null;
    className?: string;
}

export default function UserAvatar({
    name,
    image,
    className = "size-8 rounded-full",
}: UserAvatarProps) {
    if (image) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={image}
                alt=""
                referrerPolicy="no-referrer"
                className={`${className} object-cover`}
            />
        );
    }

    return (
        <span
            className={`grid place-items-center bg-primary font-semibold text-primary-content ${className}`}
            aria-hidden="true"
        >
            {name.charAt(0).toUpperCase()}
        </span>
    );
}