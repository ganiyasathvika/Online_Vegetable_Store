package com.edubridge.app1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="veggies_hub")
public class VeggiesHub {
	@Id
	@GeneratedValue
	private Integer vegetableId;
	private String vegetableName;
	private String vegetableWeight;
	private Double vegetablePrice;
	private String vegetableBenefits;
	
	private String vegetableImageUrl;
	
	
	
	public Integer getVegetableId() {
		return vegetableId;
	}
	public void setVegetableId(Integer vegetableId) {
		this.vegetableId = vegetableId;
	}
	public String getVegetableName() {
		return vegetableName;
	}
	public void setVegetableName(String vegetableName) {
		this.vegetableName = vegetableName;
	}
	public String getVegetableWeight() {
		return vegetableWeight;
	}
	public void setVegetableWeight(String vegetableWeight) {
		this.vegetableWeight = vegetableWeight;
	}
	public Double getVegetablePrice() {
		return vegetablePrice;
	}
	public void setVegetablePrice(Double vegetablePrice) {
		this.vegetablePrice = vegetablePrice;
	}
	public String getVegetableBenefits() {
		return vegetableBenefits;
	}
	public void setVegetableBenifits(String vegetableBenefits) {
		this.vegetableBenefits = vegetableBenefits;
	}
	
	
	
	public String getVegetableImageUrl() {
		return vegetableImageUrl;
	}
	public void setVegetableImageUrl(String vegetableImageUrl) {
		this.vegetableImageUrl = vegetableImageUrl;
	}
	
	public VeggiesHub(Integer vegetableId, String vegetableName, String vegetableWeight, Double vegetablePrice,
			String vegetableBenefits, String vegetableImageUrl) {
		super();
		this.vegetableId = vegetableId;
		this.vegetableName = vegetableName;
		this.vegetableWeight = vegetableWeight;
		this.vegetablePrice = vegetablePrice;
		this.vegetableBenefits = vegetableBenefits;
		this.vegetableImageUrl = vegetableImageUrl;
	}
	public VeggiesHub() {
		super();
	}
	

}