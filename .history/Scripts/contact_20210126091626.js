class Contact{
    // Constructor
    constructor(fullName, contactName, emailAddress)
    {
      this.m_fullName = fullName;
      this.m_contactName= contactName;
      this.m_emailAddress = emailAddress;
    }
  
    // Getters and Setters
    get fullName()
    {
      return this.m_fullName;
    }
  
    set fullName(full_name)
    {
      this.m_fullName = full_name;
    }
  
    get contactName()
    {
      return this.m_contactName;
    }
  
    set contactName(contact_name)
    {
      this.m_contactName = contact_name;
    }
  
    get emailAddress()
    {
      return this.m_emailAddress;
    }
  
    set emailAddress(email_address)
    {
      this.m_emailAddress = email_address;
    }
  }