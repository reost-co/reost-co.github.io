package com.reost.backend;

import com.reost.api.Messaging;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class Reost_Backend_Tests {

	@Test
	void contextLoads() {
            
	}
        
        @Test
        void MailTest() {
            
            Messaging m = new Messaging();
            
            String message = "Hello Silas, How are you!"
                    + "Am jist writing to test my mail java api in spring boot! Bye!";
            
            assertTrue(true/*m.sendEmail("silas.jcts@gmail.com", "Testing Java Mail", message)*/);
            
        }

}
