# AGENTS.md

> Developer and AI Agent Guide to Architecture, Conventions, and Best Practices for **Official Portfolio (Shayan Noori / aDevNamedShayan)**.

---

## 1. Project Overview & Tech Stack

This project is the official bilingual personal developer portfolio for **Shayan Noori**. It is an interactive, high-performance showcase engineered with modern web technologies, 3D physics simulations, custom shaders, fluid motion choreography, smooth scrolling, and full internationalization (English LTR and Persian RTL).

> [!NOTE]
> **Codebase Context**: This project is significantly older than newer enterprise projects (such as `hamyar-moalem-25`). While it is a lightweight client-heavy portfolio rather than an enterprise SSR/API platform, the rigorous architectural conventions, cleanliness standards, and maintainability rules established in `hamyar-moalem-25` are directly applied and adapted here to keep this codebase robust, modern, and consistent.

- **Framework**: Next.js 15.3.3 (App Router with Turbopack: `next dev --turbo`, dynamic `[locale]` segment, static generation with `setRequestLocale`)
- **React**: React 19.1.0 (`react`, `react-dom`)
- **Language**: TypeScript 5.8.3 (`strict: true`, `target: ES2017`, `moduleResolution: bundler`, `isolatedModules: true`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`, custom `@theme` tokens in `src/app/globals.css`, OKLCH palette, custom animations)
- **Internationalization (i18n)**: `next-intl` 4.1.0 (English `en` LTR & Persian `fa` RTL with locale detection, routing middleware, navigation wrappers, dynamic metadata)
- **3D & Physics**: Three.js (`three`), React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Rapier Physics (`@react-three/rapier`), MeshLine (`meshline`), Simplex Noise (`simplex-noise`)
- **Animations & Smooth Scrolling**: Motion (`motion/react`, `motion` v12), Lenis Smooth Scroll (`lenis/react`)
- **Theming**: `next-themes` (Dark, Light, System theme switching)
- **Forms & Validation**: Zod (`zod`), EmailJS (`@emailjs/browser`)
- **Icons & UI Primitives**: Tabler Icons (`@tabler/icons-react`), Radix UI (`@radix-ui/react-label`, `@radix-ui/react-separator`)
- **Toasts & Feedback**: Sonner (`sonner`)
- **Analytics**: Vercel Analytics (`@vercel/analytics`), Vercel Speed Insights (`@vercel/speed-insights`)
- **Package Manager**: Bun (`bun.lock`) / npm

---

## 2. Directory Structure & Path Aliases

```
official-portfolio/
├── messages/                        # next-intl translation dictionaries
│   ├── en.json                      # English messages
│   └── fa.json                      # Persian (Farsi) messages
├── public/                          # Static public assets
│   ├── files/                       # Downloadable files (PDF resume)
│   ├── fonts/                       # Local fonts (IRANYekanXVFaNumVF.ttf)
│   ├── IdCard/                      # 3D Badge textures (band.png)
│   └── Images/                      # Language flags, tech logos & playing cards
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── [locale]/                # Dynamic internationalized route segment
│   │   │   ├── layout.tsx           # Root localized layout (i18n, fonts, dir, Providers, Footer)
│   │   │   └── page.tsx             # Portfolio single-page layout (dynamic section imports)
│   │   ├── globals.css              # Tailwind v4 import, @theme variables, animations
│   │   └── icon.svg                 # Application favicon
│   ├── assets/                      # Bundled static media (e.g., Shayan.jpg)
│   ├── components/                  # Component architecture
│   │   ├── common/                  # Shared UI primitives (LampHeader, LitUpButton, LitUpLink)
│   │   ├── layout/                  # Page-level structural components (footer)
│   │   ├── NavDock/                 # Interactive navigation dock (locale & theme toggles)
│   │   ├── HeroSection/             # Hero banner, 3D Silk background, introduction, floating avatar
│   │   ├── SkillSection/            # Interactive draggable playing cards (DraggyCards, DraggableCards)
│   │   ├── ExperienceSection/       # Career timeline with TracingBeam and spotlight cards
│   │   ├── ContactSection/          # 3D interactive lanyard badge + EmailForm + SuccessPage
│   │   └── ui/                      # Visual effects, 3D canvases, form primitives, shaders
│   │       ├── Backgrounds/         # Silk canvas shader & SVG grid backgrounds
│   │       ├── Form/                # Custom styled Input, Label, and full EmailForm
│   │       ├── IdCard/              # 3D Interactive lanyard badge with Rapier physics rope
│   │       ├── shadcn/              # Radix UI wrappers (Separator)
│   │       ├── background-gradient.tsx
│   │       ├── background-lines.tsx
│   │       ├── canvas-reveal-effect.tsx
│   │       ├── card-spotlight.tsx
│   │       ├── draggable-card.tsx
│   │       ├── floating-dock.tsx
│   │       ├── lamp.tsx
│   │       ├── sonner.tsx
│   │       └── trancing-beam.tsx
│   ├── hooks/                       # Custom hooks (useLocaleDetector, useLocaleSwitch, useThemeConfig)
│   ├── i18n/                        # next-intl configuration (navigation, request, routing)
│   ├── lib/                         # Utilities & helpers
│   │   ├── utils.ts                 # cn helper (clsx + tailwind-merge)
│   │   └── utils/
│   │       ├── Constants.ts         # Centralized URLs, contact info, resume paths
│   │       └── MotionVariants.ts    # Centralized Framer Motion variants
│   ├── providers/                   # Root providers (ThemeProvider, ReactLenis, NextIntl, Toaster)
│   ├── styles/                      # Font declarations (Rubik, IranYekan, Caveat, Harmattan)
│   ├── types/                       # Shared TypeScript definitions (props, uniforms, cards)
│   └── middleware.ts                # next-intl routing middleware
```

### Path Aliases (configured in `tsconfig.json`)

Always use the configured path alias; avoid long, fragile relative imports (`../../..`):

| Alias         | Target Path | Example Usage                                               |
| ------------- | ----------- | ----------------------------------------------------------- |
| `@/*`         | `src/*`     | `@/components/common/LitUpButton`, `@/lib/utils`            |
| `@/../public` | `public/*`  | `@/../public/Images/Languages/fa.svg`, `@/../public/IdCard` |

---

## 3. Code Style & Formatting Rules

- **Indentation**: 4 spaces (`tabWidth: 4`).
- **Semicolons**: **Never use semicolons** (`semi: false`).
- **Quotes**: Single quotes for JavaScript/TypeScript (`singleQuote: true`) and JSX (`jsxSingleQuote: true`).
- **Line Length**: 120 characters (`printWidth: 120`).
- **Trailing Commas**: None (`trailingComma: "none"`).
- **End of Line**: CRLF (`endOfLine: "crlf"`).
- **Class Merging**: Always use `cn(...)` from `@/lib/utils` (wraps `clsx` and `twMerge`).
- **Type Imports**: Use explicit inline type imports:
    ```ts
    import { type ReactNode, useState } from 'react'
    import type { NextConfig } from 'next'
    ```
- **Import Ordering** (`eslint-plugin-simple-import-sort`):
    1. React & Next.js core (`react`, `next`, `next/*`)
    2. Third-party packages (`next-intl`, `motion/react`, `three`, `@tabler/icons-react`, etc.)
    3. Internal aliases (`@/components/...`, `@/hooks/...`, `@/lib/...`, `@/styles/...`, `@/types/...`)
    4. Public assets (`@/../public/...`)
    5. Local/relative imports (`./`, `../`)

---

## 4. Key Conventions (Adapted from Hamyar Moallem & Portfolio Standards)

### 4.1. Avoid Ternary Operators in JSX (Use Guard Functions with `if`)

**Strict Rule**: Avoid complex or nested ternary operators (`condition ? A : B`) directly inside JSX markup. Instead, encapsulate multi-state rendering or conditional branches into dedicated `render...()` helper functions that use early returns (`if (...) return ...`), or use clean short-circuit boolean expressions (`&&`) for simple toggles.

#### ❌ BAD (Legacy ternary patterns to avoid):

```tsx
return (
    <AnimatePresence mode='wait'>
        {emailSent ? (
            <SuccessPage key='sent' setEmailSent={setEmailSent} />
        ) : (
            <EmailForm key='sending' setEmailSent={setEmailSent} />
        )}
    </AnimatePresence>
)
```

```tsx
<LitUpButton disabled={pending}>
    {pending ? (
        <>
            <IconLoader2 className='animate-spin' />
            {t('sendingMsg')}
        </>
    ) : (
        <>
            <IconSend2 />
            {t('sendMsg')}
        </>
    )}
</LitUpButton>
```

#### ✅ GOOD (Standard Project Convention):

```tsx
export function FormContainer() {
    const [emailSent, setEmailSent] = useState(false)

    const renderContent = () => {
        if (emailSent) {
            return <SuccessPage key='sent' setEmailSent={setEmailSent} />
        }

        return <EmailForm key='sending' setEmailSent={setEmailSent} />
    }

    return <AnimatePresence mode='wait'>{renderContent()}</AnimatePresence>
}
```

```tsx
export function SubmitButton({ pending, t }: { pending: boolean; t: (k: string) => string }) {
    const renderButtonContent = () => {
        if (pending) {
            return (
                <>
                    <IconLoader2 className='shrink-0 animate-spin' />
                    {t('sendingMsg')}
                </>
            )
        }

        return (
            <>
                <IconSend2 className='shrink-0' />
                {t('sendMsg')}
            </>
        )
    }

    return (
        <LitUpButton type='submit' disabled={pending}>
            {renderButtonContent()}
        </LitUpButton>
    )
}
```

---

### 4.2. Next.js 15 App Router & Async Props

In Next.js 15, `params` and `searchParams` in layouts and pages are **Promises**.

- In Server Components / async functions (e.g., `generateMetadata`):
    ```tsx
    export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
        const { locale } = await params
        const t = await getTranslations({ locale, namespace: 'Metadata' })
        return { title: t('title') }
    }
    ```
- In synchronous components (like `RootLayout` and `HomePage`), unwrap using React 19 `use(params)`:
    ```tsx
    import { use } from 'react'
    import { setRequestLocale } from 'next-intl/server'

    export default function RootLayout({
        children,
        params
    }: {
        children: React.ReactNode
        params: Promise<{ locale: string }>
    }) {
        const { locale } = use(params)
        setRequestLocale(locale)
        // ...
    }
    ```
- Always include `generateStaticParams()` and call `setRequestLocale(locale)` to enable Static Site Generation (SSG).
- Lazy-load below-the-fold or heavy animated sections on the home page via `next/dynamic`:
    ```tsx
    const SkillSection = dynamic(() => import('@/components/SkillSection/SkillSection').then((mod) => mod.SkillSection))
    const ExperienceSection = dynamic(() =>
        import('@/components/ExperienceSection/ExperienceSection').then((mod) => mod.ExperienceSection)
    )
    const ContactSection = dynamic(() =>
        import('@/components/ContactSection/ContactSection').then((mod) => mod.ContactSection)
    )
    ```

---

### 4.3. Internationalization (next-intl) & Bilingual RTL/LTR Architecture

- **No Hardcoded Strings**: All user-facing labels, placeholders, titles, and notifications must be defined in `messages/en.json` and `messages/fa.json`.
- **Navigation APIs**: Always import routing primitives from `@/i18n/navigation` (`Link`, `redirect`, `usePathname`, `useRouter`), never directly from `next/navigation` or `next/link`.
- **Document Direction & Fonts**:
    - English (`en`): `dir="ltr"`, primary font: `rubik`, handwriting font: `caveat`.
    - Persian (`fa`): `dir="rtl"`, primary font: `iranYekan`, handwriting font: `harmattan`.
- **Direction-Aware Overrides**:
    - When rendering phone numbers, code identifiers, or raw URLs in Persian RTL mode, apply explicit `[direction:ltr]` to prevent punctuation and symbol flipping:
        ```tsx
        <span className='truncate [direction:ltr]'>{phoneNumber}</span>
        ```
- Use `useLocaleDetector()` hook (`src/hooks/useLocaleDetector.tsx`) for locale-based font or condition branching.

---

### 4.4. 3D Graphics, Shaders & Physics (Three.js, R3F, Rapier)

The portfolio features interactive 3D elements (such as the interactive physics lanyard badge and the background Silk shader):

1. **Client-Only SSR Isolation**:
    - Canvas components that rely on browser globals (`window`, WebGL context) or Rapier WASM **must** be isolated with `'use client'` and loaded with `{ ssr: false }` if dynamically imported (e.g. `Tag` in `3d-card.tsx`).
2. **Performance Optimization**:
    - Wrap 3D scenes in `<PerformanceMonitor>` to dynamically throttle `dpr` (e.g., fallback from 2 to 1 on lower-end devices):
        ```tsx
        <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}>
            {/* 3D Scene */}
        </PerformanceMonitor>
        ```
    - Memoize WebGL renderer settings using `useMemo`:
        ```tsx
        const glSettings = useMemo(
            () => ({
                powerPreference: 'high-performance',
                alpha: true,
                antialias: true,
                stencil: false,
                depth: true
            }),
            []
        )
        ```
    - Never instantiate new `Vector3`, `Color`, or `Matrix4` objects inside `useFrame` render loops; reuse existing refs or pre-allocated variables.

---

### 4.5. Motion Choreography & Animations (Motion / Framer Motion)

- **Centralize Variants**: Reusable animation definitions belong in `src/lib/utils/MotionVariants.ts` (e.g. `ShayanVariants`, `FadeWithBlur`, `HSChildVariants`, `ECChildVariants`).
- **AnimatePresence**: Use `mode="wait"` when swapping mutually exclusive components (e.g. success state vs contact form).
- **View-Triggered Animations**: Prefer `whileInView` with standard easing curves (e.g., `[.32, .72, 0, .95]` or `easeOut`) over manual scroll listeners.
- **Smooth Scrolling**: Global smooth scrolling is managed by `<ReactLenis root />` in `src/providers/Providers.tsx`.

---

### 4.6. Styling, Dark Mode & Design Tokens (Tailwind CSS v4)

- **Tailwind v4 Theme**: Tokens are declared in `@theme` in `src/app/globals.css`:
    - Backgrounds: `bg-lightBg`, `bg-darkBg`
    - Brand accents: `text-gumGreen`, `bg-lampGreen`
    - Custom animations: `animate-gradient-wave`, `animate-float`
- **Dark Mode**: Managed via `next-themes` with `@custom-variant dark (&:is(.dark *));`.
- **Class Merging**: Always merge dynamic or conditional classes using `cn(...)`:
    ```tsx
    className={cn(
      'relative flex items-center justify-center',
      { 'rounded-full': fullyRounded },
      className
    )}
    ```

---

### 4.7. Forms, Validation & Error Handling

- **Zod Schemas**: Validate form inputs with `zod`. Error messages inside schemas should consume translated strings:
    ```tsx
    const emailParamsSchema = z.object({
        email: z
            .string()
            .nonempty({ message: t('noEmailErr') })
            .email(t('invEmailErr')),
        message: z
            .string()
            .nonempty({ message: t('noMsgErr') })
            .min(10, t('shortMsgErr'))
    })
    ```
- **Error Formatting**: On catch, test `if (error instanceof z.ZodError)` and extract flattened errors via `error.flatten()` to render inline validation feedback.
- **Email Delivery**: Service credentials must be loaded from environment variables (`process.env.NEXT_PUBLIC_EMAILJS_*`).
- **User Notifications**: Use Sonner (`toast.error(...)`, `toast.success(...)`).

---

### 4.8. Naming Conventions & TypeScript Standards

| Category             | Standard               | Example                                                              |
| -------------------- | ---------------------- | -------------------------------------------------------------------- |
| **Interfaces**       | Prefix with `I`        | `ILitUpBtnProps`, `IExperienceItem`, `IThemeConfig`, `ISilkProps`    |
| **Type Aliases**     | Prefix with `T`        | `TUniforms`, `TLocale`, `TThemeMode`                                 |
| **Enums**            | Suffix with `Enum`     | `SectionIdEnum`, `LocaleEnum`                                        |
| **Constants**        | `UPPER_SNAKE_CASE`     | `GITHUB_ADDRESS`, `LINKEDIN_ADDRESS`, `RESUME_PATH`, `EMAIL_ADDRESS` |
| **Custom Hooks**     | Prefix with `use`      | `useLocaleDetector`, `useLocaleSwitch`, `useThemeConfig`             |
| **Helper Functions** | Descriptive / camel    | `cn(...)`                                                            |
| **Motion Variants**  | Suffix with `Variants` | `ShayanVariants`, `HSChildVariants`, `ECChildVariants`               |

- **Centralized Constants**: Application-wide links, contact numbers, and asset paths are maintained in `src/lib/utils/Constants.ts`. Never hardcode social links or phone numbers directly into component markup.

---

## 5. Common Recipes for Agents

### Recipe 1: Adding a New Localized String

1. Add the Persian translation key to `messages/fa.json` under the appropriate namespace.
2. Add the English translation key to `messages/en.json` under the same namespace.
3. In components, retrieve translations via `const t = useTranslations('Namespace')` and reference `t('yourKey')`.

### Recipe 2: Adding a New Interactive Motion Component

1. Define or reuse animation variants in `src/lib/utils/MotionVariants.ts`.
2. Create the component with `'use client'`.
3. Use `motion.[element]` with `initial`, `animate`, `exit`, or `whileInView`.
4. If the component has conditional branches (e.g. active vs inactive state), create a helper function using `if` statements rather than nested ternary operators in JSX.

### Recipe 3: Adding or Modifying a 3D Canvas / Physics Object

1. Ensure the canvas or child components are marked `'use client'`.
2. If using Rapier physics, place bodies inside `<Physics>` in `3d-card.tsx` or create a new isolated canvas.
3. Wrap with `<PerformanceMonitor>` to scale resolution dynamically.
4. If importing dynamic components with browser-only features, pass `{ ssr: false }` to `next/dynamic`.

---

## 6. Pre-Commit & Quality Checklist

Before completing any task or pull request, ensure:

- [ ] **No nested ternary operators inside JSX markup** (use `render...()` helper functions with early returns).
- [ ] **All user-facing text is localized** in both `messages/en.json` and `messages/fa.json`.
- [ ] **Navigation uses `@/i18n/navigation`** (`Link`, `redirect`, `useRouter`, `usePathname`).
- [ ] **Tailwind classes merged via `cn(...)`**.
- [ ] **TypeScript naming conventions respected** (`I` for interfaces, `T` for types, `UPPER_SNAKE_CASE` for constants).
- [ ] **Type imports use explicit inline syntax** (`import { type ... }` or `import type ...`).
- [ ] **RTL/LTR consideration verified** (`[direction:ltr]` applied to phone numbers/code snippets in Persian view).
- [ ] **No sensitive API keys hardcoded**; public client credentials use `process.env.NEXT_PUBLIC_*`.
- [ ] **Lint & build pass cleanly** (`npm run lint` or `bun run lint`).
