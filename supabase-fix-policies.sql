-- First, check current RLS policies
SELECT * FROM pg_policies WHERE tablename = 'products';

-- If the policies are too restrictive, drop them and recreate
DROP POLICY IF EXISTS "Allow public read access" ON products;
DROP POLICY IF EXISTS "Allow all operations" ON products;

-- Create more permissive policies for testing
-- WARNING: These allow anyone to modify data. In production, you should add authentication.

-- Allow anyone to read products
CREATE POLICY "Enable read access for all users" ON products
    FOR SELECT
    USING (true);

-- Allow anyone to insert products
CREATE POLICY "Enable insert for all users" ON products
    FOR INSERT
    WITH CHECK (true);

-- Allow anyone to update products
CREATE POLICY "Enable update for all users" ON products
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

-- Allow anyone to delete products
CREATE POLICY "Enable delete for all users" ON products
    FOR DELETE
    USING (true);
