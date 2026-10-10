const ERROR_MESSAGES: Record<string, string> = {
    INVALID_EMAIL_OR_PASSWORD: "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।",
    USER_ALREADY_EXISTS: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
    USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
        "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
    INVALID_EMAIL: "সঠিক ইমেইল ঠিকানা দিন।",
    PASSWORD_TOO_SHORT: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।",
};

export function getAuthErrorMessage(error: { code?: string }): string {
    return (
        (error.code && ERROR_MESSAGES[error.code]) ||
        "কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন।"
    );
}

export function getSafeRedirect(path: string | null): string {
    if (path && path.startsWith("/") && !path.startsWith("//")) {
        return path;
    }
    return "/";
}