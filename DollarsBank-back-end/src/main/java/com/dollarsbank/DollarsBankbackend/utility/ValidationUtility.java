package com.dollarsbank.DollarsBankbackend.utility;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.dollarsbank.DollarsBankbackend.utility.EncryptionUtility;

public class ValidationUtility {

	// PUBLIC STATIC METHODS
	
	public static boolean validPhone(String phoneNum) {
		Matcher matcher = phonePattern.matcher(phoneNum);
		return matcher.matches();
	}
	
	// returns null if everything is fine, otherwise returns the error
	public static String validPassword(String password) {
		// check for minimum length
		if(password.length() < 8)
			return "Less Than 8 Characters";
		
		// check for required characters
		boolean lower = false, upper = false, special = false;
		for(int i = password.length() - 1; i >= 0; --i) {
			if((password.charAt(i) >= 'a') && (password.charAt(i) <= 'z'))
				lower = true;
			else if((password.charAt(i) >= 'A') && (password.charAt(i) <= 'Z'))
				upper = true;
			else
				special = true;
		}
		
		if(!lower)
			return "No Lowercase Characters";
		else if(!upper)
			return "No Uppercase Characters";
		else if(!special)
			return "No Special Characters";
		else
			return null;
	}
	
	public static String generatePassword(String userId, String password) {
		return EncryptionUtility.encrypt(password, userId);
	}
	
	// used in phone number validation
	private static final String validPhonePatterns;
	private static final Pattern phonePattern;
	
	// NON-PUBLIC
	
	static {
		validPhonePatterns  = "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$" 
							+ "|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$" 
							+ "|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$";
		phonePattern = Pattern.compile(validPhonePatterns);
	}
}
