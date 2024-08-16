package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="doctor")
public class Doctor
{
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
Long dId;
String dName;
String dDate;
String dTime;
String dType;
public String getdName() 
{
    return dName;
}
public void setdName(String dName) {
    this.dName = dName;
}
public String getdDate() {
    return dDate;
}
public void setdDate(String dDate) {
    this.dDate = dDate;
}
public String getdTime() {
    return dTime;
}
public void setdTime(String dTime) {
    this.dTime = dTime;
}
public String getdType() {
    return dType;
}
public void setdType(String dType) {
    this.dType = dType;
}
}
