import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabase';

const signup = async (
  req: NextApiRequest,
  res: NextApiResponse
  ) => {

  const { email, password } = req.body;
  let { user, error } = await supabase.auth.signUp({ email, password });

  if(error) {
    res.status(500).json({ message: "There was an error signing up the user"})
  } else {
    res.status(200).json({ user: user })
  }
  
}

export default signup