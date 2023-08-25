
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { APIService } from '../services/APIService';

const HomeScreen: React.FC = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await APIService.getLeads();
      setLeads(response.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Fetch Leads" onPress={fetchLeads} />
      {leads.map((lead: any) => (
        <Text key={lead.id}>{lead.name}</Text>
      ))}
    </View>
  );
};

export default HomeScreen;