# 🐺 Husky Hack Website 2026

## 🛠️ Tech Stack
*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/) & [HugeIcons](https://hugeicons.com/)
*   **Backend / Auth**: [Supabase](https://supabase.com/)
*   **Security**: [Google reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (Latest LTS version recommended)
*   [npm](https://www.npmjs.com/) (Comes with Node.js)
*   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository**
```bash
git clone https://github.com/gbchuskyhack/husky-hack-website-2026.git
```

2.  **Navigate to the project directory**
```bash
cd husky-hack-website-2026
```

3.  **Install dependencies**
```bash
npm install
```

4. **Install SupabaseCLI**  
```bash 
npm install supabase --save-dev
```

### 🏃 Running the Project

Once the installation and configuration are complete, you can start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page updates as you edit the file.

To start the supabase server you will need to make sure docker  engine is running and then you can start the supabase development server:

```bash 
npx supabase start
```

If environment variables are undefined in the supabase edge functions, you might need to specify the path to .env file:

```bash 
npx supabase functions serve --env-file .env
```

To stop the supabase development server run:

```bash
npx supabase stop
```


## 📂 Project Structure

Here is a quick overview of the key directories in the project:

*   `src/app`: Contains the main application pages and layouts (Next.js App Router).
*   `src/components`: Reusable UI components.
*   `src/utils`: Utility functions and clients (e.g., Supabase client).
*   `public`: Static assets like images and fonts.

Here is what the .env file should look like:

```bash
SB_SUBMISSION_SECRET=sb_secret_N...
SB_RECAPTCHA_SECRET_KEY=6Le-z...
NEXT_PUBLIC_SUPABASE_URL=http://...
SUPABASE_URL=http://...
NEXT_PUBLIC_SUPABASE_KEY=sb_publishable_A...
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Le-z...
SB_CAPTCHA_VALIDATOR_ENDPOINT=http://...
SB_SUBMIT_FUNCTION_URL=http://...
VERCEL_GATEWAY_SECRET=4...
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1.  Create a new branch for your feature or bugfix.
2.  Commit your changes with clear messages.
3.  Push your branch and open a Pull Request.
