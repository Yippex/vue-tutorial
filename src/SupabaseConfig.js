
import { createClient } from '@supabase/supabase-js'

const supabaseUrl =process.env.VUE_SUPABASE_URL
const supabaseKey = process.env.VUE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase