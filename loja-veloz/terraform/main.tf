terraform {

  required_version = ">= 1.0"

}

provider "aws" {

  region = "us-east-1"

}

resource "aws_eks_cluster" "lojaveloz" {

  name = "lojaveloz-cluster"

}