# Supabase Setup Guide

## Step 1: Create Database Table

1. Go to your Supabase project: https://supabase.com/dashboard/project/mtndduggqoecuwjuhwtz
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `supabase-schema.sql`
5. Click **Run** to create the table

## Step 2: Migrate Existing Products

1. In the same SQL Editor
2. Click **New Query**
3. Copy and paste the contents of `supabase-migrate-data.sql`
4. Click **Run** to insert your existing products

## Step 3: Get Your API Credentials

1. Go to **Project Settings** (gear icon in sidebar)
2. Click on **API** section
3. Copy the following values:
   - **Project URL** (under Project URL)
   - **anon public** key (under Project API keys)

## Step 4: Configure Local Environment

1. Create a file named `.env.local` in your project root
2. Add the following (replace with your actual values):

```
NEXT_PUBLIC_SUPABASE_URL=https://mtndduggqoecuwjuhwtz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 5: Configure Netlify Environment

1. Go to your Netlify dashboard
2. Select your site: abs-it-hub-coimbatore
3. Go to **Site configuration** → **Environment variables**
4. Add the same two variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Step 6: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000/admin/dashboard and try:
- Adding a new product
- Editing an existing product
- Deleting a product

## Step 7: Deploy to Netlify

```bash
git add .
git commit -m "Migrate to Supabase database"
git push
```

Netlify will automatically deploy your changes!

## Verification

After deployment, visit:
- https://abs-it-hub-coimbatore.netlify.app/admin/dashboard
- Test all CRUD operations
- Products should now persist across deployments!
