import { supabase } from './../lib/supabase';


export async function createMessage(name:any, attendance:any, message:any) {
    try {
      const { data, error } = await supabase
        .from('bayuWedding')
        .insert([
          { name, attendance, message }
        ]);
  
      if (error) throw error;
      
      console.log('Data inserted:', data);
      return data;
    } catch (error:any) {
      console.error('Error inserting data:', error.message);
    }
  }

  export async function getMessages() {
    try {
      const { data, error } = await supabase
        .from('bayuWedding')
        .select('*')
        .order('created_at', { ascending: false });
  
      if (error) throw error;
      
      // console.log('Retrieved data:', data);
      return data;
    } catch (error:any) {
      console.error('Error retrieving data:', error.message);
    }
  }
  